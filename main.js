//!Ən bahalı məhsul
// axios.get("https://northwind.vercel.app/api/products")
// .then((res) => {
//     const products = res.data;
//     let db = products[0];

//     products.forEach((item) => {
//       if (item.unitPrice > db.unitPrice) {
//         db = item;
//       }
//     });
//     console.log(db.name);
//   });

//! Ortalama stok miqdarı

// axios.get("https://northwind.vercel.app/api/products")
// .then((res)=>{
//     const products = res.data;
//     let cem=0;
//     products.forEach((item)=>{
//         cem+=item.unitsInStock;
//     })
//     ortaStok = cem / products.length
//      console.log(ortaStok);
// })

//! “C” ilə başlayan məhsullar
// axios.get("https://northwind.vercel.app/api/products")
// .then((res) => {
//     const products = res.data;
//     let c = products.filter(item => item.name.charAt(0) === "C");
//     console.log(c.map(item => item.name));
// })

//!“London” şəhərindəki müştəriləri console a yaz
// axios.get("https://northwind.vercel.app/api/customers")
//   .then((res) => {
//     const customers = res.data;
//     customers.forEach(() => {
//       for (const element of customers) {
//         if (element.address.city == "London") {
//           console.log(element.contactName);
//         }
//       }
//     });
//   })
//   .catch((error) => {
//     console.error("Xeta: " + error);
//   });

//!Region NULL olan nə qədər customer var?
// axios.get("https://northwind.vercel.app/api/customers")
//   .then((res) => {
//     const customers = res.data;
//     const arr = customers.filter(item=> item.address.region=="NULL")
//     console.log(arr.length);
//   })


//! id si 1 olan userin nece postu var ? 
// axios.get("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => {
//     const posts = res.data;
//     let arr = posts.filter(item => item.userId === 1)
//     console.log(arr.length);
//   })


//! 1 nömrəli albümdə nə qədər fotoqraf var?
// axios.get("https://jsonplaceholder.typicode.com/albums")
//   .then((res) => {
//     const albums = res.data;
//     let arr = albums.filter(item => item.userId === 1)
//     console.log(arr.length);
//   })