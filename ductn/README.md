---
title: Review git
---

## Overview
1. Git là gì?

Bạn đang làm việc cùng team ??? Thử tượng tượng rằng trong team bạn không ai biết gì về git cả và mỗi người code một phần, sau đó review và merge code thì ... **ÔI KINH HOÀNG**. Nào là code lỗi, code thiếu, không kịp update,... và Git trở thành vị cứu tinh.

- Git là một hệ thống quản lý phân tán (DVCS), giúp quản lý dự án đơn giản, dễ dàng hơn.  
- Các file có thể nằm trong 3 trạng sau của git: 
    * commited: Dữ liệu được lưu trữ an toàn trong Database 
    * modified: File có thay đổi nhưng chưa được lưu trong Database
    * staged: Đánh dấu các file sửa đổi **modified** để cho commit tiếp
- Git tổ  chức chia thành 3 khu vực:
    * Working tree
    * Staging
    * Git directory 

2. Các trạng thái trong git 

![lifecycle](./img/lifecycle.png)

* *Tracked*: là tập tin đã được đánh dấu theo dõi trong Git. Trong *Tracked* có các trạng thái phụ:
	+ Unmodified: Chưa chỉnh sửa 
	+ Modified: Đã chỉnh sửa nhưng chưa đưa vào *StagingArea*
	+ Staged: Đã đưa vào *StagingArea* và chuẩn bị commit 
* *Untracked*: các tập tin mới được tạo ra và chưa được đánh dấu theo dõi 

3. Git Commit 

- `git commit` thực hiện lưu toàn bộ nội dung trong vùng Staging vào CSDL Git và *log* mô tả thay đổi so với commit trước 
	> `$ git commit -m "Add README"`
- Thêm -a sẽ thực hiện lệnh `git add` để đưa các file đang được giám sát có sự thay đổi vào staging rồi tự động chạy git commit
	> `$ git commit -a -m "Add README"`
- Amending: Sử dụng khi không muốn tạo nhiều commit bằng cách thêm tham số --amend
	```
		$ git commit -m "Add index.txt"
		$ git add ductn/index.txt
		$ git commit --amend 
	```

4. Git branch

- Tạo branch mới
	> `$ git branch ductn1`
- Thay đổi tên branch 
	> `$ git branch -m ductn1 ductn2`
- Chuyển branch 
	> `$ git checkout master`
- Merge branch 
	> `$ git merge ductn2`

5. Git Stash 

- Sử dụng khi muốn lưu lại những thay đổi *chưa commit*. Để lưu lại nội dung đang làm sử dụng lệnh: 
	> `$ git stash save ` or `$ git stash`
- Xem lại danh sách các stash đã lưu 
	> `$ git stash list`, xem lại cả nội dung `$ git stash list -p`
- Lấy lại thay đổi và xóa nội dung thay đổi lưu trong stash 
	+ ```
		$ git stash apply stash@{1}
	   	$ git stash drop stash@{1}
	  ```
	+ Hoặc sử dụng `$ git stash pop stash@{1}`
	+ Xóa toàn bộ `$ git stash clear`

### [me](https://github.com/ductnn)