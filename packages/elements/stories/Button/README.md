# Button

### :smile: Usage

```js
import { FlatButton } from 'elements';
```

<!-- STORY -->

### Properties

* `onClick` - click callback
* `label` - button text

| propName | propType | defaultValue | isRequired |
| -------- | -------- | ------------ | ---------- |
| onClick  | func     | -            |            |
| label    | string   | -            | true       |

### Roadmap

```js
import { FlatButton } from 'elements';

render() {
  return (
    <FlatButton onClick={this.handleClick}>FlatButton</FlatButton>
  );
}
```