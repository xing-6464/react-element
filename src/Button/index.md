# Button 按钮

常用的操作按钮

---

## 基本用法

使用 `type`, `plain`, `round` 和 `circle` 来定义按钮的样式

```jsx
import { Button } from 'r-element';

export default () => (
  <>
    <div className="basic block">
      <Button> hello </Button>
      <Button type="primary"> Primary </Button>
      <Button type="success"> Success </Button>
      <Button type="warning"> Warning </Button>
      <Button type="danger"> Danger </Button>
      <Button type="info"> Info </Button>
    </div>
  </>
);
```
