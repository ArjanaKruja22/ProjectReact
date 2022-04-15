import { Card,CardContent,CardMedia,CardActionArea, Typography } from "@mui/material";
import React from "react";
import './App.css';

class Commerce extends React.Component{
  constructor(props){
    super(props);
  this.state = {
   products:"",
   id:"",
   title:"",
   price:"",
   description:"",
   category:"",
   image:"",
   rating:"",
   fired: null
  };
  this.handleChange = this.handleChange.bind(this);
    this.fetchUser = this.fetchCommerce.bind(this);
  }
  handleChange(e){
    this.setState({products: e.target.value});
  }

  async fetchCommerce(){
    const response = await fetch(
      "https://fakestoreapi.com/products" + this.state.products
    );
    const json = await response.json();
    this.setState({
      id: json.id,
      title: json.title,
      price: json.price,
      description: json.description,
      category: json.category,
      image: json.image,
      rating: json.rating,
      fired: true
      
    });
  }
  render(){
    return(
      <div className="App">
      <h1>E-commerce</h1>
      <h2>Products</h2>
      <form>
      
        <input type="text"  placeholder="Search products..."/>
        <button onClick={this.fetchCommerce}>Search</button>
     
    </form>
    <form>
      <select>
        <option value="Category">Category</option>
      </select>
    </form>
    {this.state.fired && (
          <div>
            <h1>User Details</h1>
            <p>
              <b>Id:</b>
              {this.state.id}
            </p>
            <p>
              <b>Title:</b>
              {this.state.title}
            </p>
            <p>
              <b>price:</b>
              {this.state.price}
            </p>
            <p>
              <b>Description:</b>
              {this.state.description}
            </p>
            <p>
              <b>Category:</b>
              {this.state.category}
            </p>
            <p>
              <b>Rating:</b>
              {this.state.rating}
            </p>
          </div>
        )}
    <div className="App1">
    <Card className="App4" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://lecure.al/wp-content/uploads/2021/02/Salicylic-Acid-Cleanser-Web.png"
          alt="product"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Category
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Product 1 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.ubuy.vn/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjErb3Z0Nk5mWEwuX1NMMTAyNF8uanBn.jpg"
          alt="product"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Category
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Product 2 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://pbs.twimg.com/profile_images/563000683037597696/AqYerA4D_400x400.png"
          alt="product"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Category
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Product 3
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className="App2">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          
          alt="Products"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Category
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Product 4
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0d%2F54%2F0d54bbb70797453c29e873e20749a7fc8d2c708c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_nightwear_pyjamas%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
          alt="product"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Category
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Product 5
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://n.nordstrommedia.com/id/sr3/ff040e7f-5132-4baf-be33-30edd11630e1.jpeg?h=365&w=240&dpr=2"
          alt="product"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Category
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Product 5
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </div>
    );
  }
}

export default function App() {
  return <Commerce />;
}




