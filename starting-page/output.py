import re

def update_js_file(new_service_id, new_owner_id):
    with open('starting-page/src/main.ts', 'r') as file:
        content = file.read()

    pattern = r"Skapi\(\s*['\"]([^'\"]*)['\"]\s*,\s*['\"]([^'\"]*)['\"]\s*\)"

    new_content = re.sub(pattern, f"Skapi('{new_service_id}', '{new_owner_id}')", content)

    with open('starting-page/src/main.ts', 'w') as file:
        file.write(new_content)

    print(f"Updated 'main.js' with service_id: {new_service_id} and owner_id: {new_owner_id}")

update_js_file('new_service_id', 'new_owner_id')

