#!/usr/bin/env python3
import re
import base64
import tempfile
import os
import subprocess

with open('main.js') as f:
    code = f.read()


already_included = set()

def replace_include(match):
    file_name = match.group(2)
    if match.group(1) == '_once' and file_name in already_included:
        return ''
    already_included.add(file_name)
    with open('js_includes/{}'.format(file_name)) as f:
        contents = f.read()
    return contents


while True:
    code, n = re.subn(r'//[ ]*include(_once)?{([a-z0-9/\.-_]+)}', replace_include, code)
    if n == 0:
        break


def replace_base64(match):
    with open(match.group(1), 'rb') as f:
        contents = f.read()
    return base64.b64encode(contents).decode('utf-8')


def replace_datauri(match):
    with open(match.group(2), 'rb') as f:
        contents = f.read()
    return 'data:{};base64,{}'.format(match.group(1), base64.b64encode(contents).decode('utf-8'))


code = re.sub(r'#base64{([a-z0-9/\.-_]+)}', replace_base64, code)
code = re.sub(r'#datauri{([a-z/]+),([a-z0-9/\.-_]+)}', replace_datauri, code)

with tempfile.NamedTemporaryFile('w') as f:
    f.write(code)
    code = subprocess.check_output(['uglifyjs', '--compress', '--mangle', 'toplevel', f.name]).decode('utf-8')

with tempfile.NamedTemporaryFile('w') as f:
    f.write(code)
    os.system('ruby 3rd_party_tools/pnginator.rb {} index.html >/dev/null 2>&1'.format(f.name))
    size = os.stat('index.html').st_size
    print('{} bytes used, {} more to go!'.format(size, 20480 - size))
