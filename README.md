# Jupyter Lite

To work on this site locally first install the JupyterLite CLI with all of the addons

```
pip install jupyterlite[all]
```

After this is install, in this top level directory, run the following command:

```
jupyter lite serve --contents content --output-dir docs
```


To build the site I run the following command and then sync the changes to github!

```
jupyter lite build --contents content --output-dir docs --force --base-url smazurchuk.github.io/jupyterLite
```