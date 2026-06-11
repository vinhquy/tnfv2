# TNF Group Website

Static website cho Công ty Cổ phần T&N Financial Group.

## Cấu trúc thư mục

```
tnf-website/
├── index.html                   ← Trang chính (duy nhất)
├── assets/
│   ├── css/
│   │   └── style.css            ← Toàn bộ CSS
│   ├── js/
│   │   └── main.js              ← Toàn bộ JavaScript
│   ├── images/
│   │   └── logo.png             ← Logo TNF (đặt thêm ảnh vào đây)
│   └── files/
│       └── (đặt file PDF vào đây)
└── README.md
```

## Thêm ảnh

Đặt file ảnh vào `assets/images/` rồi dùng trong HTML:
```html
<img src="assets/images/ten-anh.jpg" alt="Mô tả" />
```

## Thêm file báo cáo tài chính

1. Đặt file PDF vào `assets/files/`, ví dụ: `assets/files/bctc-q1-2024.pdf`
2. Trong `index.html`, tìm phần Disclosure tương ứng, bỏ comment dòng:
```html
<a class="file-link" href="assets/files/bctc-q1-2024.pdf" target="_blank">
  Tải về BCTC Q1/2024 (PDF)
</a>
```

## Deploy lên Vercel

1. Push toàn bộ thư mục lên GitHub
2. Import vào Vercel → tự nhận diện static site
3. Deploy (không cần cấu hình gì)

## Cập nhật nội dung

- **Thông tin công ty**: Sửa trực tiếp trong `index.html`
- **Style / màu sắc**: Sửa trong `assets/css/style.css` (phần `:root`)
- **Logic JS**: Sửa trong `assets/js/main.js`

## Màu thương hiệu

| Tên         | Hex       | Dùng cho               |
|-------------|-----------|------------------------|
| Purple      | `#4d3a95` | Navbar, nút chính, icon |
| Orange      | `#f0b11d` | Accent, CTA hero       |
| Purple dark | `#3a2a74` | Hover states           |
| Navy        | `#0d1a26` | Body text              |
