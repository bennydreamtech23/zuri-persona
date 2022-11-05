
import Buttons from "./Buttons";
import Header from "./Header";
import Footer from "./Footer";

const Tasks = ()=>{
  return(
    <main className="App-header container-fluid p-5">
    
    <div>
    <Header />
        </div>
        
        <div className="btn_groups" tabindex="0">
        <Buttons href="https://mobile.twitter.com/bennydreams2326" text="Twitter Link" id="twitter"/>
         <Buttons href="https://hng9.slack.com/archives/D04883VAN0M" text="BenedictaUwabunkeonye" id="slack"/>
       
        <Buttons href= "https://training.zuri.team/" target="_blank"
        text="Zuri Team" id="btn__zuri" tabindex="1"/>
        
        <Buttons href="https://books.zuri.team/" target="_blank" text="Zuri Books" id="books" tabindex="1" title="Design book and coding"/>
        
        <Buttons href="https://books.zuri.team/python-for-beginners?ref_id=%3CBenedictaUwabunkeonye%3E" target="_blank" text="Python Books" id="book__python" tabindex="1" title="Cool Book to Boost your skills at affordable rate"/>
        
        <Buttons href="https://backgroundcheck.zuri.team/" text="Background Checks for Coders" id="pitch" tabindex="1" title="Background Check on coders"/>
        
        <Buttons href="https://books.zuri.team/design-rules" text="Design Books" id="book__design" tabindex="1" title="free design book offered by Zuri"/>
        
       <Buttons href="/contact" text="Contact" id="contact" tabindex="1"/>
        </div>
        <Footer />
    </main>
    )
}

export default Tasks