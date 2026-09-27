'use client';

import { useState } from 'react';
import { Search, ShoppingBag, Heart, ArrowRight, Menu, X, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  {id:1,name:"Noor Embroidered Suit",cat:"Ladies",price:"PKR 12,900",tag:"Bestseller"},
  {id:2,name:"Mehfil Signature Suit",cat:"Ladies",price:"PKR 14,900",tag:"New"},
  {id:3,name:"Zari Evening Edit",cat:"Ladies",price:"PKR 16,900",tag:"Limited"},
  {id:4,name:"Classic Lawn Set",cat:"Ladies",price:"PKR 7,900",tag:"Essential"},
  {id:5,name:"Royal Kurta",cat:"Gents",price:"PKR 6,900",tag:"New"},
  {id:6,name:"Signature Shalwar Kameez",cat:"Gents",price:"PKR 9,900",tag:"Bestseller"},
  {id:7,name:"Executive Wash & Wear",cat:"Gents",price:"PKR 8,500",tag:"Essential"},
  {id:8,name:"Heritage Embroidered Kurta",cat:"Gents",price:"PKR 11,900",tag:"Limited"}
];

export default function Home(){
  const [menu,setMenu]=useState(false);
  const [filter,setFilter]=useState("All");
  const shown=filter==="All"?products:products.filter(p=>p.cat===filter);

  return <main>
    <header className="header">
      <div className="announcement">WORLDWIDE DELIVERY • HANDCRAFTED IN PAKISTAN</div>
      <nav>
        <button className="icon mobile" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
        <a className="logo" href="#">AAPK <span>COLLECTION</span></a>
        <div className={"navlinks "+(menu?"open":"")}>
          <a href="#new">New Arrivals</a><a href="#ladies">Ladies</a><a href="#gents">Gents</a><a href="#story">Our Story</a>
        </div>
        <div className="actions"><button className="icon"><Search/></button><button className="icon"><Heart/></button><button className="icon bag"><ShoppingBag/><b>0</b></button></div>
      </nav>
    </header>

    <section className="hero">
      <div className="heroContent">
        <p className="eyebrow"><Sparkles size={15}/> THE SIGNATURE EDIT</p>
        <h1>Elegance,<br/><i>stitched</i> with identity.</h1>
        <p className="lead">Contemporary Pakistani fashion designed for moments that deserve to be remembered.</p>
        <div className="heroBtns"><a className="btn primary" href="#new">Explore Collection <ArrowRight size={17}/></a><a className="textbtn" href="#story">Discover AAPK</a></div>
      </div>
      <div className="heroVisual"><div className="visualCard"><span>AAPK</span><small>COLLECTION</small></div></div>
    </section>

    <section className="marquee"><span>EMBROIDERY</span><span>•</span><span>CRAFTSMANSHIP</span><span>•</span><span>MODERN HERITAGE</span><span>•</span><span>PAKISTANI DESIGN</span></section>

    <section id="new" className="section">
      <div className="sectionHead"><div><p className="eyebrow">CURATED FOR YOU</p><h2>New & noteworthy</h2></div><a href="#">View all <ArrowRight size={16}/></a></div>
      <div className="filters">{["All","Ladies","Gents"].map(x=><button className={filter===x?"active":""} onClick={()=>setFilter(x)} key={x}>{x}</button>)}</div>
      <div className="grid">{shown.map((p,i)=><motion.article initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.05}} className="product" key={p.id}>
        <div className="productImage"><span>{p.tag}</span><div className="imageMark">AAPK</div><button><Heart size={18}/></button></div>
        <div className="productInfo"><div><small>{p.cat}</small><h3>{p.name}</h3></div><strong>{p.price}</strong></div>
      </motion.article>)}</div>
    </section>

    <section id="ladies" className="split"><div className="splitVisual"><div className="imageMark">LADIES</div></div><div className="splitText"><p className="eyebrow">THE LADIES EDIT</p><h2>Details that speak softly.</h2><p>Refined silhouettes, intricate embroidery and timeless palettes—created for celebrations and everyday elegance.</p><a className="btn primary" href="#new">Shop Ladies <ArrowRight size={17}/></a></div></section>

    <section id="gents" className="split reverse"><div className="splitVisual"><div className="imageMark">GENTS</div></div><div className="splitText"><p className="eyebrow">THE GENTS EDIT</p><h2>Quiet confidence, tailored.</h2><p>Elevated essentials and statement traditional wear for the modern Pakistani wardrobe.</p><a className="btn primary" href="#new">Shop Gents <ArrowRight size={17}/></a></div></section>

    <section id="story" className="story"><p className="eyebrow">OUR PHILOSOPHY</p><h2>Made with craft.<br/>Worn with character.</h2><p> AAPK Collection brings together Pakistani craftsmanship and contemporary design, creating pieces that feel personal, polished and distinctly yours.</p></section>

    <footer><div><a className="logo">AAPK <span>COLLECTION</span></a><p>Contemporary Pakistani fashion.</p></div><div className="footerLinks"><a>Instagram</a><a>TikTok</a><a>Facebook</a><a>WhatsApp</a></div><small>© 2026 AAPK Collection. All rights reserved.</small></footer>
  </main>
}
