import React from "react";
import { Text, Button, Img, Heading, Input } from "./..";

export default function Footer() {
  return (

    <footer className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-row md:flex-col justify-start w-full pl-[46px] gap-11 py-[46px] mx-auto md:gap-5 md:p-5 bg-gradient max-w-[1290px]">
        <div className="flex flex-col items-center justify-start w-[48%] md:w-full ml-[13px] gap-10">
          <div className="flex flex-col items-center justify-start w-full gap-2.5">
            <Heading
              size="4xl"
              as="h1"
              className="!text-gray-50_01 tracking-[-0.50px] text-[40px] font-semibold leading-[60px]"
            >
              Subscribe now to get the latest updates of Uranus
            </Heading>
          </div>
          <div className="flex flex-row sm:flex-col justify-start w-full gap-px sm:gap-5">
            <Input shape="square" name="email" placeholder="Your email here.." className="w-[74%] md:w-full" />
            <Button
              size="10xl"
              shape="square"
              className="sm:px-5 !text-yellow-100 tracking-[-0.50px] font-bold min-w-[157px]"
            >
              Subscribe
            </Button>
          </div>
        </div>
        <Img
          src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F3b662448-ca27-45ef-9d17-a4b5027bc5db%2FUntitled.png?table=block&id=bccefaca-50cf-4ba6-8f40-f38c3561b0b5&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=1020&userId=&cache=v2"
          alt="pexelsphotoby"
          className="w-[48%] md:w-full md:h-[309px] h-[350px] object-cover "
        />
      </div>
      <div className="flex flex-row justify-end w-full mt-[100px]  p-12 md:ml-0 md:p-5 bg-black-900">
        <div className="flex flex-col items-center justify-start w-full gap-[148px] mx-auto max-w-[1301px]">
          <div className="flex flex-row md:flex-col justify-between items-start w-full md:gap-10">
            <div className="flex flex-col items-start justify-start w-[28%] md:w-full gap-4">
              <Heading size="2xl" as="h2" className="!text-gray-50_01 tracking-[-0.50px] text-[32px] font-bold">
                $URANUS Web
              </Heading>
              <Text
                size="md"
                as="p"
                className="!text-gray-50_a3 tracking-[-0.50px] !text-base opacity-0.81 leading-[35px]"
              >
                Everyone Loves to Pump Uranus more then they like when Uranus Dumps.
                The liquidity injections just keep coming into Uranus.
                Don't pass gas it's gonna be giant
                Hold onto Uranus!
                Disclaimer: This is all in good fun - a blend of memes, astrology, and crypto. We will not go moon, we going to Uranus.
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-[17%] md:w-full gap-6">
              <Heading as="h5" className="mt-[5px] !text-gray-50_01 tracking-[-0.50px] !text-xl !font-semibold">
                Partners
              </Heading>
              <div className="flex flex-col items-start justify-start gap-6">
                <Text as="p" className="!text-gray-50_a3 tracking-[-0.50px] !text-sm opacity-0.81">
                  <a href="https://Dia.wiki">Decentralized Intelligence Agency</a>
                </Text>
                <Text as="p" className="!text-gray-50_a3 tracking-[-0.50px] !text-sm opacity-0.81">
                <a href="https://worldvibeweb.org/">World Vibe Web</a>
                </Text>
                <Text as="p" className="!text-gray-50_a3 tracking-[-0.50px] !text-sm opacity-0.81">
                <a href="https://www.purplerock.xyz/">Purplerock</a>
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[17%] md:w-full gap-6">
              <Heading as="h5" className="mt-[5px] !text-gray-50_01 tracking-[-0.50px] !text-xl !font-semibold">
                Resources
              </Heading>
              <div className="flex flex-col items-start justify-start gap-6">
                <Text as="p" className="!text-gray-50_a3 tracking-[-0.50px] !text-sm opacity-0.81">
                  <a href="https://maaz64.github.io/uranus-meme-token">Effective Vibes</a>
                </Text>
                <Text as="p" className="!text-gray-50_a3 tracking-[-0.50px] !text-sm opacity-0.81">
                  <a href="https://goldenmeme.org/">Golden Meme</a>
                </Text>
                
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[17%] md:w-full pt-[5px] gap-[25px]">
              <Heading as="h5" className="!text-gray-50_01 tracking-[-0.50px] !text-xl !font-semibold">
                Follow Us
              </Heading>
              <div className="flex flex-row justify-start w-full">
                <Button color="yellow_100" shape="circle" className="w-[40px] ml-4">
                  <Img src="images/img_bxl_instagram.svg" />
                </Button>
                <Button color="yellow_100" shape="circle" className="w-[40px] ml-4">
                  <Img src="images/img_bxl_facebook.svg" />
                </Button>
                <Button color="yellow_100" shape="circle" className="w-[40px] ml-4">
                  <Img src="images/img_bxl_twitter.svg" />
                </Button>
                <Button color="yellow_100" shape="circle" className="w-[40px] ml-4">
                  <Img src="images/img_bxl_tiktok.svg" />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
            <Text size="md" as="p" className="!text-gray-50_a3 tracking-[-0.50px] !text-base opacity-0.81">
              © Copyright 2024. All Rights Reserved.
            </Text>
            <div className="flex flex-row justify-between w-auto pr-[3px] gap-[41px]">
              <Text size="md" as="p" className="mb-px !text-gray-50_a3 tracking-[-0.50px] !text-base opacity-0.81">
                Terms of condition
              </Text>
              <Text size="md" as="p" className="!text-gray-50_a3 tracking-[-0.50px] !text-base opacity-0.81">
                Privacy Policy
              </Text>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
