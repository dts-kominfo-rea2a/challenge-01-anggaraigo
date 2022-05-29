// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

const favoriteColorMonica = ["Yellow","Pink","White","Purple"]
const favoriteColorWendy  = ["Blue", "Black", "Grey"]

const educationMonica = [
    {name: "SD 01", city: "Jakarta", graduate: 2016},
    {name: "SMP 02", city: "Jakarta", graduate: 2019},
    {name: "SMA 03", city: "Tangerang"}
];

const educationWendy = [
    {name: "SD 01", city: "Jakarta", graduate: 2016},
    {name: "SMP 02", city: "Jakarta", graduate: 2019},
    {name: "SMA 03", city: "Tangerang"}
];

const favoriteRestaurantMonica = ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"]
const favoriteRestaurantWendy = ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"]

const firstUser = {
    name:"Monica",
    gender:"Female",
    age:17,
    email:"monica@dingdong.com",
    favoriteColor: [...new Set(favoriteColorMonica)],
    isHavePet:"Yes",
    education:educationMonica,
    favoriteRestaurant: [...new Set(favoriteRestaurantMonica)]
};

const secondUser = {
    name:"Wendy",
    gender:"Male",
    age:23,
    email:"wendy@dingdong.com",
    favoriteColor:[...new Set(favoriteColorWendy)],
    isHavePet:"No",
    education:educationWendy,
    favoriteRestaurant: [...new Set(favoriteRestaurantWendy)]

};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser,secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};