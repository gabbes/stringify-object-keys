# Contributing

You are very welcome to contribute to this project! Please follow the information below to keep code in this project consistent.

## Compatibility

This is a pretty simple script and keeping ES5 and IE11 compatibility does not sacrifice that much. A build step for such a small project feels a bit overkill, so we have to keep compatibility manually! If you're unsure how to make something functional in ES5, check out the [Babel REPL](https://babeljs.io/repl/) with the es2015 preset.

We also use a Eslint plugin to help check outselves and keep code ES5 compatible, read more on this below.

## Coding standards

### File format

Submitted files should be formatted as assigned in the [editorconfig](./.editorconfig) file.

See the [editorconfig projects](https://editorconfig.org/) homepage for additional information.

### Eslint

As mentioned above, code should be ES5 compatible, and our Eslint setup assist us here. I recommend installing a Eslint extension to your favorite editor or IDE. See [Eslint documentation](https://eslint.org/) for more information.

## Testing

Make sure tests are up to date with any changes and that running them passes as expected.
