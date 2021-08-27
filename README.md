# NPM First package for learning
Trying to create a package on NPM

## Instalation
```bash
npm i mouadbnl-first-package --save
```

## Usage
First define where you want to apply the sahdows
```html
<div m-sw style="padding = 5px;">
    lorem
</div>
```

then Import and initialize the wizard
```javascript
import { shadowizard } from "shadowizard"

shadowizard({
    shadow_type: 'hard'
});
```
And it works