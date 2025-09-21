# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
## React Render HTML
[React Render Html](https://www.w3schools.com/react/react_render.asp)
## The element of React 
There is no need to be "root"
However, This is a  standard convention.

## React ES6 Classes
[React ES6 Classes](https://www.w3schools.com/react/react_es6_classes.asp)
## Arrow Function
[React ES6 Arrow Functions](https://www.w3schools.com/react/react_es6_arrow.asp)

这段代码定义了一个名为 `Header` 的类，并在其中实现了一个 `changeColor` 方法。下面详细解释每一部分：

---

### 代码结构解析

#### 1. 类定义
```javascript
class Header {
  constructor() {
    this.color = "Red";
  }

  changeColor = function() {
    document.getElementById("demo").innerHTML += this;
  }
}
```
- `Header` 类有一个构造函数，初始化成员变量 `color` 为字符串 `"Red"`。
- 类中定义了一个方法 `changeColor`，它是一个函数，作用是把 `this` 追加到页面上 `id="demo"` 的元素内容里。

#### 2. 实例化
```javascript
const myheader = new Header();
```
- 创建了一个 `Header` 的实例对象 `myheader`。

#### 3. 事件绑定
```javascript
window.addEventListener("load", myheader.changeColor);
document.getElementById("btn").addEventListener("click", myheader.changeColor);
```
- 当页面加载完成时，`window` 对象会调用 `changeColor` 方法。
- 当页面上 `id="btn"` 的按钮被点击时，也会调用 `changeColor` 方法。

---

### 重点解释：“this” 的指向问题

- `changeColor` 方法内部用到了 `this`。
- 由于 `changeColor` 是以普通函数形式定义（不是箭头函数），而且是作为事件处理函数传递的，所以在事件触发时，`this` 的指向取决于谁调用它：

  - **window.addEventListener("load", myheader.changeColor);**
    - 此时，`changeColor` 作为事件处理函数执行，`this` 指向的是 `window` 对象，而不是 `myheader` 实例。
    - 所以，`document.getElementById("demo").innerHTML += this;` 实际上是将 `window` 对象转换成字符串追加到页面内容中。

  - **document.getElementById("btn").addEventListener("click", myheader.changeColor);**
    - 当按钮被点击时，`this` 指向触发事件的按钮元素（即 `document.getElementById("btn")`）。
    - 所以，这时追加到页面内容的是按钮元素对象的字符串表示。

---

### 结论

这段代码的核心是：**事件处理函数中的 `this`，会根据事件触发的对象不同而变化**。如果希望 `this` 总是指向类实例本身，应该把 `changeColor` 定义为箭头函数，例如：

```javascript
changeColor = () => {
  document.getElementById("demo").innerHTML += this.color;
}
```

这样 `this` 永远指向 `myheader` 实例，`innerHTML` 就会追加 `"Red"` 字符串，而不是对象的字符串表示。

---

#### 总结
- `changeColor` 不是箭头函数，事件触发时，`this` 指向触发事件的对象（`window` 或按钮）。
- 如果用箭头函数定义，则 `this` 指向类实例，可以正确访问 `color` 属性。

[variable](https://www.w3schools.com/react/react_es6_variables.asp)
如果你有更多关于这段代码的疑问，欢迎继续提问！
const has a block scope.

The keyword const is a bit misleading.

It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:

Reassign a constant value
Reassign a constant array
Reassign a constant object
But you CAN:

Change the elements of constant array
Change the properties of constant object

## Variable 
[Variable](https://www.w3schools.com/react/react_es6_array_map.asp)

## JavaScript Array map()

[JavaScript Array map()](https://www.w3schools.com/react/react_es6_array_map.asp)
