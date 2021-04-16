# @mathlive/create-app

## Scaffolding reproducible Mathlive Issues

> **Compatibility Note:**
> We use Vite as our bundle manager, and it requires [Node.js](https://nodejs.org/en/) version >=12.0.0.

With Yarn:

```bash
$ yarn create @mathlive/app
```

Then follow the prompts!

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a Mathlive + Vue issue report, run:

```bash
# yarn
yarn create @mathlive/app mathlive-vue-bug --template vue
```

Currently supported template presets include:

- `vanilla`
- `vanilla-ts`
- `vue`
- `vue-ts`
- `react`
- `react-ts`
