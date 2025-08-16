import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import tsEslint from 'typescript-eslint';

export default tsEslint.config(
	{ ignores: ['**/*.js'] },
	eslint.configs.recommended,
	tsEslint.configs.strictTypeChecked,
	tsEslint.configs.stylisticTypeChecked,
	eslintPluginPrettier,
	eslintConfigPrettier,
	{
		languageOptions: {
			parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname }
		}
	},
	{
		rules: {
			'@typescript-eslint/restrict-template-expressions': 'off',
			'@typescript-eslint/require-await': 'off',
			'@typescript-eslint/no-non-null-assertion': 'off',
			'@typescript-eslint/no-extraneous-class': 'off'
		}
	}
);
