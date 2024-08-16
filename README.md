# SETUP PROJECT REACT

- Template: Vite + JavaScript
- Package: `npm`

## Package

| dependencies       | description                                                                |
| ------------------ | -------------------------------------------------------------------------- |
| `react-router-dom` | v6                                                                         |
| `classnames`       | Một tiện ích JavaScript đơn giản để nối các tên lớp với nhau có điều kiện. |
|                    |                                                                            |

| devDependencies | description |     |
| --------------- | ----------- | --- |
| `sass`          | Style       |     |
|                 |             |     |

## Folder Structure

- `assets`: Chứa các tài sản tĩnh như hình ảnh, font chữ.
- `components`: Chứa các thành phần giao diện có thể tái sử dụng.
- `features`: Các tính năng cụ thể, mỗi tính năng có cấu trúc riêng.
  - features/user: Chứa tất cả các file liên quan đến tính năng quản lý người dùng (components, services, ...).
  - features/products: Chứa tất cả các file liên quan đến tính năng quản lý sản phẩm.
- `pages`: Chứa các trang (page) chính của ứng dụng.
- `services`: Chứa các logic liên quan đến việc gọi API, xử lý dữ liệu.

```txt
src
  assets/
    images/
    audio/
    fonts/

  components/
    Button.jsx
    Input.jsx

  features/
    users/
      UserForm.jsx
      UserService.jsx
    products/
      ProductList.jsx

  pages/
    Home.jsx
    About.jsx

  services/

  App.js
  index.js
```

# OVERVIEW

## React Router Dom

```sh
npm i react-router-dom
```

- Package: `react-router-dom`
- Version: `^6.26.0`
- Website: [https://reactrouter.com/en/main](https://reactrouter.com/en/main)

## Styles

### SASS

```sh
npm i -D sass
```
