<template>
    <div class="reseta-header">
        <div class="header-top">
            <div class="user">
                <img class="user-icon" src="~/assets/icons/user-solid.svg" alt="User Icon">
                <div class="user-name">John Doe</div>
            </div>
            <img class="logo-wide" src="~/assets/images/reseta-form-img.png" alt="Reseta RQx">
            <div class="sn-icons">
                <img src="~/assets/icons/search-solid.svg" alt="User Icon">
                <img src="~/assets/icons/bell-solid.svg" alt="User Icon">
            </div>
        </div>
        <div class="menu-icons">
                <img src="~/assets/icons/th-large-solid.svg" alt="Dashboard">
                <img src="~/assets/icons/hospital-solid.svg" alt="Hospital">
                <img src="~/assets/icons/user-md-solid.svg" alt="Doctors">
                <img src="~/assets/icons/pills-solid.svg" alt="Pharmacy">
                <img src="~/assets/icons/wallet-solid.svg" alt="Wallet">
                <img src="~/assets/icons/bars-solid.svg" alt="Sidebar Menu">
        </div>
    </div>
</template>
<style scoped>
.reseta-header{
    border-bottom: 1px solid #ccc;
    background-color: #fff;
    box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
}    
.user-icon {
        width: 40px;
        height: 40px;
        padding: 4px;
        border: 2px solid #000;
        border-radius: 50%;
    }
    .header-top{
        display: grid;
        align-items: center;
        grid-template-columns: 1fr 3fr 1fr;
        padding: 12px;
    }
    .user{
        text-align: center;
    }
    .logo-wide{
        max-height: 80px;
        height: auto;
        margin: 0 auto;
    }
    .sn-icons{
        display: flex;
        justify-content: center;
    }
    .sn-icons img{
        width: 30px;
        height: 30px;
        border: 1px solid #000;
        border-radius: 50%;
        margin-left: 4px;
        padding: 4px;
    }
    .menu-icons{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        align-items: center;
        justify-content: center;
        padding: 12px;
    }
    .menu-icons img{
        width: 30px;
        height: 30px;
        margin: 0 auto;
    }
</style>