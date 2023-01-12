import Image from "next/image";
import Hero from "../public/images/home-hero.png";
import { useState } from "react";
import Modal from "./components/modal";
import SearchInput from "./components/SearchInput";
import Navigation from "./components/Navigation";

export const getStaticProps = async () => {
  const resProduct = await fetch("https://fakestoreapi.com/products");
  const dataProduct = await resProduct?.json();

  return {
    props: {
      products: dataProduct,
    },
  };
};

export default function Home(props) {
  const { products } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState();
  const [search, setSearch] = useState("");

  const wrapTitle = (title) => {
    const text = title.split(" ");
    if (text.length < 7) {
      return title;
    } else {
      return text.slice(0, 4).join(" ") + "...";
    }
  };

  const onSearchChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const modalHandler = () => {
    setModalVisible((prev) => !prev);
  };

  const filteredProducts = products.filter((product) => {
    return product?.title
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase());
  });

  return (
    <>
      <div className="flex max-h-screen justify-center overflow-hidden">
        <div className="relative  w-full md:w-96">
          <div className=" relative -z-10 flex h-52 w-full flex-col justify-center bg-primary-color">
            <div className="z-10 p-5">
              <div className="text-lg font-light text-white">Hi, Queen</div>
              <div className="text-2xl font-bold text-white">
                What shop do <br /> you need?
              </div>
            </div>
            <div className="absolute right-0 bottom-0 z-0">
              <Image src={Hero} alt="hero-picture" width={250} height={130} />
            </div>
          </div>
          <section className="home-menus">
            <div className=" -mt-5 h-[600px] w-full overflow-y-scroll rounded-t-3xl bg-white px-5 pt-5 pb-[370px]">
              <section id="main-content">
                <SearchInput
                  Placeholder="Search Electronic Store..."
                  onChangeHandler={onSearchChangeHandler}
                />
                <div className="mt-5 grid grid-cols-2 flex-wrap  gap-8 ">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <div className="relative h-56" key={product?.id}>
                        <div
                          onClick={() => {
                            setModalVisible((prev) => !prev);
                            setModalData(product);
                          }}
                        >
                          <Image
                            className="h-36 w-36 rounded-lg"
                            src={product?.image}
                            alt={product?.title}
                            width={"144px"}
                            height={"144px"}
                          />
                          <div className="mt-3 mb-6 text-xs font-normal">
                            {wrapTitle(product?.title)}
                          </div>
                        </div>

                        <div className="absolute bottom-0 flex w-full items-center justify-between">
                          <div className="text-sm font-bold text-price">
                            $ {product?.price}
                          </div>
                          <div
                            className={` flex h-6 w-11 cursor-pointer items-center justify-center rounded-tiny border border-primary-color text-tiny font-normal text-primary-color`}
                          >
                            Add
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="mt-5 w-full text-center">
                      product not found
                    </div>
                  )}
                </div>
              </section>
            </div>
          </section>
          <Navigation />
        </div>
      </div>
      {modalVisible && (
        <Modal open={modalVisible} product={modalData} handler={modalHandler} />
      )}
    </>
  );
}
