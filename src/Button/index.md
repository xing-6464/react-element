# Button 按钮

常用的操作按钮

---

## 基本用法

使用 `type`, `plain`, `round` 和 `circle` 来定义按钮的样式

```jsx
import { useRef, useEffect } from 'react';
import { Button } from 'r-element';

export default () => {
  return (
    <>
      <div className="basic">
        <Button> hello </Button>
        <Button type="primary"> Primary </Button>
        <Button type="success"> Success </Button>
        <Button type="warning"> Warning </Button>
        <Button type="danger"> Danger </Button>
        <Button type="info"> Info </Button>
      </div>
      <div className="plain" style={{ marginTop: '10px' }}>
        <Button plain> hello </Button>
        <Button type="primary" plain> Primary </Button>
        <Button type="success" plain> Success </Button>
        <Button type="warning" plain> Warning </Button>
        <Button type="danger" plain> Danger </Button>
        <Button type="info" plain> Info </Button>
      </div>
      <div className="round" style={{ marginTop: '10px' }}>
        <Button round> hello </Button>
        <Button type="primary" round> Primary </Button>
        <Button type="success" round> Success </Button>
        <Button type="warning" round> Warning </Button>
        <Button type="danger" round> Danger </Button>
        <Button type="info" round> Info </Button>
      </div>
    </>
  );
};
```
