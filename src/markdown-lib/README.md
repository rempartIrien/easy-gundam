This folder contains a copy of the [solid-markdown lib folder](https://github.com/andi23rosca/solid-markdown/tree/main/lib).

It seems that [solid-markdown](https://github.com/andi23rosca/solid-markdown) package is not compliant to new SolidStart rules (from 0.2.24) in the way it is packaged. Indeed, a simple copy of the same files does the job. As solid-markdown dependencies are present, we don't need to include them directly (although it is cleaner). We are waiting for a new release of this amazing project.

Also added [PR #10](https://github.com/andi23rosca/solid-markdown/pull/10) from solid-markdown repo to fix reactivity.

We did not try to fix any ESLint issues that can't be fixed automatically.
