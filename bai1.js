let menu = ["rau xào", "thịt luộc", "gà rán"];
while(true){
    let option = prompt("Xin mời nhập vào 1 trong bốn chữ cái C, U, R, D").toUpperCase();

    if (option === "C") {
        let newDish = prompt("Xin mời nhập món bạn muốn thêm vào:");
        menu.push(newDish);
        localStorage.setItem('menu',JSON.stringify(menu))
        alert("Món mới đã được thêm vào menu: " + newDish);
    } else if (option === "U") {
        let dishUpdate = prompt("Mời người dùng nhập vào tên món muốn update");
        let index = menu.indexOf(dishUpdate);

        if (index !== -1) {
            let newDishName = prompt("Mời người dùng nhập vào tên món ăn mới");
            menu[index] = newDishName;

            localStorage.setItem('menu', JSON.stringify(menu));

            alert("Món ăn đã được cập nhật thành công.");
        } else {
            alert("Không tìm thấy món ăn trong menu. Vui lòng kiểm tra lại tên món.");
        }
    } else if (option === "R") {
        let storedMenu = JSON.parse(localStorage.getItem('menu')) || [];
        alert("Danh sách món ăn: " + storedMenu.join(", "));
    } else if (option === "D") {
        let dishToDelete = prompt("Mời người dùng nhập vào tên món muốn delete");
        let index = menu.indexOf(dishToDelete);

        if (index !== -1) {
            menu.splice(index, 1); 

            localStorage.setItem('menu', JSON.stringify(menu));

            alert("Món ăn đã được xóa thành công.");
        } else {
            alert("Không tìm thấy món ăn trong menu. Vui lòng kiểm tra lại tên món.");
        }
    } else {
        alert("Chữ cái không hợp lệ. Vui lòng chọn C, U, R, hoặc D.");
    }
}



