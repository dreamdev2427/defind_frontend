import { useCallback, useState } from "react";
import "./FaqAccrodianstyles.scss";
import parse from "html-react-parser";

const FAQ_SCRIPT = [
  {
    q: "Get Started on Binance Lite to Buy and Sell Your Crypto",
    a: "NFT stands for non-fungible token",
  },
  {
    q: "Why Hasn’t My Withdrawal Arrived",
    a: "Rize NFT marketplace works just like any other NFT marketplace. We are a place where users may come and trade P2P (peer  to peer) in a safe and decentralized manner. We do not store your assets, we just let you view them and have a safe way and safe place to trade in between other users. We also offer some great features like comments, direct messages, and other blockchains. We do this to help users maximize their communities appearance and increase adoption.",
  },
  {
    q: "How to Complete Identity Verification",
    a: "Choose your preferred blockchain network. Connect your wallet. Create a profile. Create a collection. Finally create your NFT. We have some videos on our <a href='https://www.youtube.com/@rize2day' target='_blank' >Youtube</a>.",
  },
  {
    q: "How Do I Deposit/Withdraw Cryptocurrency on Binance",
    a: "A non-fungible token (NFT) is a type of digital asset that represents ownership or proof of authenticity of a unique item or piece of content using blockchain technology. Unlike cryptocurrencies such as Bitcoin or Ethereum, which are fungible and can be exchanged on a one-to-one basis.<br/><br/> NFTs are unique and cannot be exchanged on an equal basis. NFTs are typically used to represent digital art, collectibles, virtual real estate, music, videos, or any other form of digital content. Each NFT contains a digital signature that verifies its authenticity, ownership, and transaction history, which is stored on a blockchain. This decentralized and transparent nature of blockchain technology ensures that the ownership and provenance of an NFT can be easily verified.<br/><br/> NFTs have gained significant popularity in recent years, as they allow creators to sell their digital works directly to collectors, eliminating the need for intermediaries. The ownership of an NFT can be transferred or sold, allowing for a secondary market where collectors can buy, sell, or trade these unique digital assets. It's important to note that owning an NFT does not necessarily grant ownership of the underlying content or intellectual property rights associated with it. Instead, it represents a unique digital item or a certificate of ownership for that specific item within the digital realm.",
  },
  {
    q: "How to Buy Crypto with Card on Binance Lite App",
    a: "Yes! You may give any physical item a digital identity. Selling a physical item as an NFT (non-fungible token) means creating a digital representation or token that represents ownership or proof of authenticity of that physical item. <br/><br/>While the physical item itself remains tangible and in the possession of the owner, the NFT acts as a digital certificate of ownership or a unique digital item associated with the physical item. <br/><br/>When you sell a physical item as an NFT, you are essentially selling the digital representation or token that represents the item's authenticity and ownership rights. The buyer of the NFT becomes the owner of that digital representation, which is recorded on a blockchain. The ownership of the physical item itself is not transferred through the NFT transaction unless explicitly arranged separately. <br/><br/>The NFT serves as a way to verify the uniqueness, provenance, and ownership of the physical item. It allows collectors, investors, or enthusiasts to own a unique digital asset associated with the physical item, and it can provide a way to trade or transfer ownership of that digital representation. <br/><br/>It's important to note that selling a physical item as an NFT does not grant ownership of the actual physical item itself. The NFT represents a separate digital asset tied to the physical item, often providing benefits such as provenance, collectibility, or additional digital content related to the physical item. <br/><br/>The physical item will typically need to be transferred separately, following any agreed-upon terms between the buyer and seller. ",
  },
];

const PageFAQ = () => {
  const [searchedFAQs, setSearchedFAQs] = useState(FAQ_SCRIPT);
  const [selId, setSelId] = useState(-1);
  const [showAllAnswer, setShowAllAnswer] = useState({});
  const clickItem = useCallback(
    (index) => {
      if (selId === index) {
        setSelId(-1);
      } else {
        setSelId(index);
      }
    },
    [selId]
  );

  const handleClickShowMore = (query) => {
    let flag = showAllAnswer[query];
    let newFlags = { ...showAllAnswer, [query]: !flag };
    setShowAllAnswer(newFlags);
  };

  return (
    <div className="relative w-full h-full">
      <div className="w-full h-full z-2">
        <div className="container section-faq__content pb-20">
          {searchedFAQs &&
            searchedFAQs.length > 0 &&
            searchedFAQs.map((item, index) => (
              <div className="accordion-wrapper" key={index}>
                <div
                  className={
                    selId === index
                      ? "accordion active"
                      : "accordion rounded-2xl"
                  }
                  onClick={() => {
                    clickItem(index);
                  }}
                >
                  <span className=" text-black text-xl flex pl-3 pt-0">
                    <span className="mr-2">Q:</span>
                    <span>{item?.q}</span>
                  </span>
                </div>
                <div className="panel  ">
                  {parse(
                    showAllAnswer[item?.q] === false
                      ? item?.a?.toString().substring(0, 200) + "..."
                      : item?.a
                  )}
                  {showAllAnswer[item?.q] === false ? (
                    <span
                      className="ml-1 inline text-[rgb(255,171,64)] cursor-pointer z-5"
                      onClick={() => handleClickShowMore(item?.q)}
                    >
                      Show more
                    </span>
                  ) : showAllAnswer[item?.q] === true ? (
                    <span
                      className="ml-1 inline text-[rgb(255,171,64)] cursor-pointer z-5"
                      onClick={() => handleClickShowMore(item?.q)}
                    >
                      Show less
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PageFAQ;
