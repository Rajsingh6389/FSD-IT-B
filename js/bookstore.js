function Book(props){
    const image=React.createElement("img",
       {
           src: props.image,
           width: 150,
           height: 150,
           alt: "Book Image"
       }
    );
    const h4=React.createElement("h4",null,`Price: ${props.price}`);
    const child=React.createElement("div",{className: "card"},image,h4);
    return (child);
   }
   const books=[{
       image: "",
       price: 235
   },{
       image: "",
       price: 245
   },{
       image: "",
       price: 335
   }];
   const parent=document.getElementById("root");
   const root=ReactDOM.createRoot(parent);
   
  
   const bookElements = books.map(book =>
    React.createElement(Book, {
      image: book.image,
      price: book.price
    })
  );
  
  root.render(React.createElement('div', null, bookElements));
  