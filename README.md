# eslint-plugin-data-test-to-data-testid

repalce data-test with data-testid

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-data-test-to-data-testid`:

```sh
npm install eslint-plugin-data-test-to-data-testid --save-dev
```

## Usage

Add `data-test-to-data-testid` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "data-test-to-data-testid"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "data-test-to-data-testid/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


