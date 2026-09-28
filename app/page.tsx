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
 <a
  href="https://wa.me/923252466277?text=Assalamualaikum%2C%20mujhe%20AAPK%20Collection%20ke%20products%20ke%20bare%20mein%20maloomat%20chahiye."
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat on WhatsApp"
  style={{
    position: "fixed",
    right: "20px",
    bottom: "20px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#25D366",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
    textDecoration: "none",
  }}
>
  <svg
    viewBox="0 0 24 24"
    width="32"
    height="32"
    fill="white"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.198-.01-.371-.01-.57-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12.045 21.785h-.004a9.85 9.85 0 01-5.025-1.376l-.361-.214-3.753.96 1.002-3.657-.235-.375a9.86 9.86 0 01-1.512-5.243c0-5.437 4.423-9.859 9.864-9.859a9.8 9.8 0 017.005 2.905 9.82 9.82 0 012.9 7.006c-.002 5.438-4.424 9.853-9.881 9.853z" />
  </svg>
</a> </main>
}
