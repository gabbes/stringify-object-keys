# Contributing

You are very welcome to contribute to this project!

However, please adhere to the following to keep the code consistent.

## Compatibility

I wish for this project to be usable by as many as possible, and therefore published code should be ES5 compatible.

The code itself is so small that I didn't want to add an additional build step, so we have to make sure it's compatible manually. If you're unsure how to make something functional in ES5, use the [Babel REPL](https://babeljs.io/repl/) with the es2015 preset to test the code.

We also use a Eslint plugin to help us keep code ES5 compatible, read more on this below.

## Testing

Make sure tests are up to date with any changes and that running them passes as expected.

## Coding standards

Submitted files should be formatted as assigned in the [editorconfig](./.editorconfig) file.

See the [editorconfig projects](https://editorconfig.org/) homepage for additional information.

### Eslint

As mentioned above, code should be ES5 compatible, and our Eslint setup assist us here.

I recommend installing a Eslint extension to your favorite editor or IDE.

Else you can run Eslint locally after installation:

```sh
./node_modules/.bin/eslint ./
```

Test files should be written in modern JavaScript instead, and uses the popular [airbnb Eslint extension](https://github.com/airbnb/javascript) instead.
