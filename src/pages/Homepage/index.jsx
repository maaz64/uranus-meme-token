import { Text, Img, Heading, } from "../../components";
import Footer from "../../components/Footer/index";
import YouTubeEmbed from "../../components/Youtube/index";

export default function HomepagePage() {

  return (
    <>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-900">
        <div className="flex flex-col items-center justify-start w-full bg-hero bg-no-repeat bg-cover bg-center bg-fixed" >
          <header className="flex justify-center items-center w-full p-[35px] sm:p-5">
            <div className="flex flex-row md:flex-col flex-start w-full mx-auto md:gap-10 md:px-5 max-w-[1290px]">
              <Text size="2xl" as="p" className="tracking-[-0.50px] !font-pollerone text-gray-200">
                $URANUS Web
              </Text>
            </div>
          </header>
          <div className="flex flex-row justify-start w-full px-14 py-[75px] md:p-5 ">
            <div className="flex flex-col md:flex-col justify-between items-center w-full my-[5px] md:gap-10 max-w-[1290px]">
              <div className="flex flex-col w-[48%] md:w-full gap-[30px] ">
                <div className="flex flex-col items-center justify-center w-full gap-[26px] text-gray-200">
                  <Text size="s" as="p" className="tracking-[-0.50px] text-gray-200">
                    Uranus Meme Token
                  </Text>
                  <Text size="xl" as="p" className="tracking-[-0.50px] !font-pollerone">
                    <span className="text-gray-100 font-raleway item-center justify-center">
                      In Crypto We Trust, But In Uranus, We Believe!
                    </span>

                  </Text>
                </div>
              </div>
              <div className="flex mt-5">

                <Text size="md" as="p" className="mb-1 !text-gray-300 tracking-[-0.50px] text-center ">
                  Uranus, the ruler of Aquarius, starts 2024 in retrograde, going direct on, Saturday, January 27, then retrogrades again on Sunday, September 1.This suggests ongoing evolution in your home life and personal growth.

                  Uranus champions individuality, social justice, and authenticity. During its retrograde, focus on living by your values and perhaps engage more actively in humanitarian efforts.

                  In 2024, the location of the Sun on the March equinox is in the constellation of Pisces but also on the border of Aquarius. So, we are slowly moving into a new age, from Pisces to Aquarius.

                  Aquarius is ruled by Uranus, the planet that governs innovation, technology, and surprising events. Uranus perfectly mirrors Aquarius' distinctive attitude, complementing the nontraditional nature of these visionary air signs.
                </Text>


              </div>
            </div>

          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start w-full gap-[50px] md:px-5 max-w-[1290px]">
            <div className="flex flex-col items-center justify-start w-full gap-4 p-1">
              <Heading size="xl" as="h2" className="tracking-[-0.50px] text-center !font-semibold text-gray-200">
                The Memeifesto
              </Heading>
              <Text size="md" as="p" className="!text-gray-500 tracking-[-0.50px] text-center">
                Welcome to the wild side of crypto - where memes aren't just dreams, and astrology isn’t just your daily horoscope.
              </Text>
            </div>
            <div className="flex flex-row md:flex-col w-full gap-5">
              <div className="flex flex-col items-center justify-start w-[33%] md:w-full gap-6">
                <Img
                  src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F8b5aca2f-a69d-45ae-b403-a1a7db496f98%2FUntitled.png?table=block&id=ad352b03-5c03-471b-a134-d6f2c7ffcb9b&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=660&userId=&cache=v2"
                  alt="image"
                  className="w-full md:h-auto sm:w-full object-cover"
                />

              </div>
              <div className="flex flex-col items-center justify-start w-[33%] md:w-full gap-6">
                <Img
                  src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2Fbf2f4077-f535-4195-9efb-52756a98070f%2FUntitled.png?table=block&id=89bfc120-2c14-43d7-9470-835afc89abb2&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=1420&userId=&cache=v2"
                  alt="image"
                  className="w-full md:h-auto sm:w-full object-cover"
                />

              </div>
              <div className="flex flex-col items-center justify-start w-[33%] md:w-full gap-6">
                <Img
                  src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2Faa5d7905-001d-4421-a62b-20d06dc94e56%2FUntitled.png?table=block&id=8f87aebd-40c4-40da-bf39-1a6189c260e1&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=1420&userId=&cache=v2"
                  alt="image"
                  className="w-full md:h-auto sm:w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full ">
          <div className="flex flex-row md:flex-col justify-between w-full md:gap-10 md:px-5 max-w-[1290px]">
            <div className="flex flex-col items-center justify-start w-[47%] md:w-full gap-[50px]">
              <Heading size="xl" as="h2" className="tracking-[-0.50px] text-gray-200">
                Podcast
              </Heading>
              <div className="justify-center w-full h-full gap-[50px] grid-rows-2 sm:grid-cols-1 sm:gap-5 grid">
                <div className="flex flex-col items-center justify-center md:flex-col w-full gap-5 ">

                  <YouTubeEmbed embedId={'gI7qfHuLQ6Q'} />
                </div>
                <div className="flex flex-col items-center justify-center w-[100%] md:w-full gap-6">
                  <YouTubeEmbed embedId={'Ugkxf5cbkoaHLHBI0NhsEmEL3g7Dy6uwTbBY'} />
                </div>

              </div>
            </div>
            <Img
              src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F1790eb96-29b6-4fb6-9c90-e7c58c2b19c0%2FUntitled.png?table=block&id=de2220c1-8ccd-426a-9fad-7efe5266ce14&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=1290&userId=&cache=v2"
              alt="image_one"
              className="w-[47%] h-[650px] md:w-full md:h-[640px] object-cover"
            />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
