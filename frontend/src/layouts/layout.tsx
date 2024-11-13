import BackGround from "@/components/BackGround";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

type Props = {
  children: React.ReactNode;
  showBackground?: boolean;
}

const Layout = ({ children, showBackground = false }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
        <Header />
        {showBackground && <BackGround/>}
        <div className="container mx-auto flex-1 py-10">
            {children}
        </div>
        <Footer/>
    </div>
  );
};

export default Layout;