import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  articles = [
    {
        "source": {
            "id": null,
            "name": "Abplive.com"
        },
        "author": "ABP News Bureau",
        "title": "Breaking News LIVE: PM Modi Arrives In Delhi To Inaugurate Global Millets Conference - ABP Live",
        "description": "Breaking News Live: Follow this page for all the updates and Breaking News from India and around the world.",
        "url": "https://news.abplive.com/news/breaking-news-live-updates-18-march-today-pm-modi-rahul-gandhi-arvind-kejriwal-supreme-court-india-us-uk-pakistan-economy-imran-khan-lalu-prasad-rabri-devi-delhi-court-land-for-job-scam-kavitha-women-s-quota-bill-1589206",
        "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2023/02/22/91fa75c0da286eb1e17880fd3aadf25d1677038187422566_original.jpeg?impolicy=abp_cdn&imwidth=1200&imheight=628",
        "publishedAt": "2023-03-18T05:58:05Z",
        "content": "Breaking News Live Updates: Hello and welcome to ABP Live. Follow ABP Live's blog to get the latest developments, breaking news, latest updates, and other developing stories across the country and ab… [+2106 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": "NDTV Sports Desk",
        "title": "India vs Australia - Watch: Virat Kohli's Reaction After Hardik Pandya Faces A Free-hit Delivery In .. - NDTV Sports",
        "description": "Hardik Pandya took the crucial wicket of Steve Smith in the first ODI against Australia and then scored a crucial 25 off 31 balls after the Indian top-order had faltered",
        "url": "https://sports.ndtv.com/india-vs-australia-2023/virat-kohlis-reaction-after-hardik-pandya-faces-a-free-hit-delivery-in-1st-odi-vs-australia-watch-3871733",
        "urlToImage": "https://c.ndtvimg.com/2023-03/7md66ijo_kohli_625x300_18_March_23.jpg",
        "publishedAt": "2023-03-18T05:39:27Z",
        "content": "India fell in a tricky spot in the first ODI against Australia in Mumbai on Friday, but a responsible 108*-run stand between KL Rahul (75*) and Ravindra Jadeja (45*) saw the hosts chase down a 189-ru… [+2153 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": "Livemint",
        "title": "Manish Sisodia's nameplate removed from bungalow; BJP asks 'Why is Kejriwal in such a hurry?' | Mint - Mint",
        "description": "The Arvind Kejriwal-led AAP government has allotted Manish Sisodia's bungalow to Atishi Marlena.The BJP questioned the urgency behind getting Sisodia's bungalow vacated",
        "url": "https://www.livemint.com/politics/news/manish-sisodia-s-nameplate-removed-from-bungalow-bjp-congress-ask-why-is-kejriwal-in-such-a-hurry-11679114603083.html",
        "urlToImage": "https://images.livemint.com/img/2023/03/18/600x338/Manish-Sisodia-bungalow_1679116607989_1679116616970_1679116616970.jpg",
        "publishedAt": "2023-03-18T05:19:31Z",
        "content": "Delhi politics is on the boil ever since Manish Sisodia, the former Deputy CM of the capital resigned from his post after he went to jail in a case related to liquor policy. The resignation of Sisodi… [+2935 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "India Today"
        },
        "author": "India Today News Desk",
        "title": "States on alert as H3N2 cases rise in India; Delhi, Maha, Karnataka issue advisory | Details - India Today",
        "description": "The government has issued a Covid advisory in six states of the country. These states are Kerala, Karnataka, Tamil Nadu, Telangana, Maharashtra, and Gujarat.",
        "url": "https://www.indiatoday.in/india/story/states-on-alert-as-h3n2-cases-rise-in-india-delhi-maha-karnataka-issue-advisory-2348257-2023-03-18",
        "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202303/h3n2_1-sixteen_nine.jpg?VersionId=whix1J3fj3iLACZ3KKeP2bE2PXUW1fvu",
        "publishedAt": "2023-03-18T05:15:00Z",
        "content": "By India Today News Desk: India is witnessing a surge in H3N2 Influenza virus cases, with the number of cases going up to 451 till March 5, according to data shared by the health ministry. Indias dea… [+3484 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "Mallika Soni",
        "title": "‘Give date and venue’: Imran Khan's party on Shehbaz Sharif's talk offer - Hindustan Times",
        "description": "Imran Khan News: The comment came just a day after Imran Khan said that he was ready to \"talk to anyone\" and \"render any sacrifice\" for the country. | World News",
        "url": "https://www.hindustantimes.com/world-news/pakistan-political-crisis-imran-khan-news-give-date-and-venue-imran-khan-s-party-on-shehbaz-sharif-s-talk-offer-101679111820134.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/03/18/1600x900/pakistan_pm_imran_khan_bail_1679070659271_1679115801030_1679115801030.jpg",
        "publishedAt": "2023-03-18T05:04:27Z",
        "content": "Imran Khan's Pakistan Tehreek-e-Insaf (PTI) urged the Shehbaz Shairf led government to \"give a date and venue\" for a meeting all political parties, Dawn newspaper reported while the country's top reg… [+1540 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "ScienceAlert"
        },
        "author": "Rebecca Dyer",
        "title": "Scientists Identify New Schizophrenia Risk Genes in First-of-Its-Kind Study - ScienceAlert",
        "description": "Two newly discovered genes have been linked to schizophrenia while a previously known gene associated with schizophrenia risk has also been linked to autism in a massive new study.",
        "url": "https://www.sciencealert.com/scientists-identify-new-schizophrenia-risk-genes-in-first-of-its-kind-study",
        "urlToImage": "https://www.sciencealert.com/images/2023/03/GlowingLightOnDNAHelixOrangeBrown.jpg",
        "publishedAt": "2023-03-18T05:00:13Z",
        "content": "Two newly discovered genes have been linked to schizophrenia while a previously known gene associated with schizophrenia risk has also been linked to autism in a massive new study.\r\nScientists say th… [+5035 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "Shishir Gupta",
        "title": "Fully deployed India-China forces is new normal on LAC - Hindustan Times",
        "description": "With PLA showing no signs of withdrawing the additional reserve troops deployed across eastern sector pre-20th National Party Congress of Chinese Communist Party last October, mutual de-escalation of forces has been put on the backburner with Indian Army also…",
        "url": "https://www.hindustantimes.com/india-news/fully-deployed-india-china-forces-is-new-normal-on-lac-101679114787224.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/03/18/1600x900/ladakh_1679114988545_1679114995766_1679114995766.jpeg",
        "publishedAt": "2023-03-18T04:50:44Z",
        "content": "Army Chief General Manoj Pande at a news conclave on Thursday confirmed that the Chinese PLA had not reduced troops along the Line of Actual Control (LAC) and was focusing on military upgradation on … [+3616 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": null,
        "title": "Arrest Warrant Against Vladimir Putin Over Ukraine War Crime Allegations - NDTV",
        "description": "The International Criminal Court on Friday announced it had issued an arrest warrant against Russian President Vladimir Putin for the \"unlawful deportation\" of Ukrainian children.",
        "url": "https://www.ndtv.com/world-news/world-court-issues-arrest-warrant-against-vladimir-putin-over-childrens-rights-3870746",
        "urlToImage": "https://c.ndtvimg.com/2023-03/gil0pvco_putin-getty_650x400_18_March_23.jpg",
        "publishedAt": "2023-03-18T04:33:00Z",
        "content": "Both warrants are related to children's rights. (File)\r\nThe Hague: The International Criminal Court on Friday announced an arrest warrant for Russian President Vladimir Putin on the war crime accusat… [+5588 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": null,
        "title": "On Rahul Gandhi's UK Remarks Row, Amit Shah Quotes Indira Gandhi - NDTV",
        "description": "Union Home Minister Amit Shah has said the current logjam in Parliament can be resolved if the Opposition comes forward for talks and that the government will go \"two steps ahead\" if it takes \"two steps forward\".",
        "url": "https://www.ndtv.com/india-news/parliament-logjam-can-be-resolved-if-amit-shah-urges-opposition-3871540",
        "urlToImage": "https://c.ndtvimg.com/2021-12/ic1a4s6o_amit-shah-pti_625x300_25_December_21.jpg",
        "publishedAt": "2023-03-18T04:11:00Z",
        "content": "Amit Shah said the Parliament logjam can be resolved if Opposition comes forward for talks (File)\r\nNew Delhi: Union Home Minister Amit Shah has said the current logjam in Parliament can be resolved i… [+4051 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Indian Express"
        },
        "author": "Entertainment Desk",
        "title": "Mrs Chatterjee vs Norway Zwigato box office collection Day 1 - The Indian Express",
        "description": "Mrs Chatterjee vs Norway, Zwigato box office collection: Rani Mukerji starrer is performing better than Kapil Sharma's film.",
        "url": "https://indianexpress.com/article/entertainment/bollywood/mrs-chatterjee-vs-norway-zwigato-box-office-collection-day-1-rani-mukerji-film-better-than-zwigato-8504338/",
        "urlToImage": "https://images.indianexpress.com/2023/03/mrs-chatterjee-zwigato-box-office.jpg",
        "publishedAt": "2023-03-18T04:07:05Z",
        "content": "Rani Mukerji’s emotional drama Mrs Chatterjee Vs Norway got only a few takers at the ticket counters on its opening day. The film, based on the true story of an Indian couple whose children were take… [+2127 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "Aniruddha Dhar",
        "title": "Aniksha tried to extort ₹10 cr from Amruta Fadnavis: Cops - Hindustan Times",
        "description": "Anshika Jaisinghani was arrested after Amruta Fadnavis filed a complaint with Mumbai Police alleging she was threatened and asked to pay a bribe of ₹10 crore by her. | Mumbai news",
        "url": "https://www.hindustantimes.com/cities/mumbai-news/designer-anshika-jaisinghani-tried-to-extort-rs-10-crore-from-amruta-fadnavis-101679109340000.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/03/18/1600x900/amruta_1679111394157_1679111400786_1679111400786.jpg",
        "publishedAt": "2023-03-18T03:54:28Z",
        "content": "'Designer' Anshika Jaisinghani, who was arrested for allegedly threatening and blackmailing Amruta Fadnavis, had tried to extort 10 crore after failing to offer 1 crore bribe to the wife of Maharasht… [+2648 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT Sports Desk",
        "title": "Shastri's interesting advice for Dravid, Rohit on Rahul's chances for WTC final - Hindustan Times",
        "description": "The discussion has now been brewing over whether India should reconsider Rahul again given his record in England and former India coach Ravi Shastri came up with an interesting suggestion for incumbent head coach Rahul Dravid and captain Rohit Sharma. | Crick…",
        "url": "https://www.hindustantimes.com/cricket/ravi-shastri-s-interesting-advice-for-rahul-dravid-rohit-sharma-on-kl-rahul-s-place-in-india-xi-for-wtc-final-101679069592046.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/03/17/1600x900/shastri_rahul_1677342450823_1679070967849_1679070967849.jpg",
        "publishedAt": "2023-03-18T03:52:57Z",
        "content": "Team India will be in for a selection headache when they head to London coming June for the World Test Championship final against Australia. They had dropped KL Rahul in the recently-concluded Border… [+2222 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "Times Now",
        "title": "'I'm Back!': Donald Trump returns to Facebook and Youtube after a two-year ban - Times of India",
        "description": "Former President Donald Trump has returned to Facebook after a more than two-year ban. “I’M BACK!” Trump posted on the site weeks after his personal account was reactivated. Trump, who is running his third campaign for the White House, also shared an",
        "url": "https://timesofindia.indiatimes.com/videos/news/im-back-donald-trump-returns-to-facebook-and-youtube-after-a-two-year-ban/videoshow/98747168.cms",
        "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-98747168,imgsize-45468.cms",
        "publishedAt": "2023-03-18T03:43:29Z",
        "content": "Mar 18, 2023, 10:25AM ISTSource: Times NowFormer President Donald Trump has returned to Facebook after a more than two-year ban. IM BACK! Trump posted on the site weeks after his personal account was… [+1052 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Greater Kashmir"
        },
        "author": "GK Web Desk",
        "title": "J&K: Four killed, several injured as bus turns turtle in Awantipora - Greater Kashmir",
        "description": "Srinagar, Mar 18: At least four persons were killed after a bus they were travelling in turned turtle in the Awantipora area of south Kashmir's Pulwama district",
        "url": "https://www.greaterkashmir.com/kashmir/jk-four-killed-several-injured-as-bus-turns-turtle-in-awantipora",
        "urlToImage": "https://gumlet.assettype.com/greaterkashmir%2F2023-03%2F2e5a2ced-d72e-4d52-840b-4900b0da5b48%2FWhatsApp_Image_2023_03_18_at_8_45_58_AM.jpeg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true",
        "publishedAt": "2023-03-18T03:36:59Z",
        "content": "The deceased were identified as Nasrudin Ansari s/o Islam Ansari of Khairawa Tola Pakri Harditerha West Champaran, Bihar - 845451, Raj Karan Das s/o Shivu as Singhari Gobindpur Kishanganj, Khatia Pic… [+204 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": null,
        "title": "UBS In Talks To Acquire Crisis-Hit Swiss Bank Credit Suisse: Report - NDTV",
        "description": "UBS Group AG is exploring an acquisition of all or parts of Credit Suisse Group AG at the urging of Swiss regulators after its smaller rival was pummeled by a crisis of confidence.",
        "url": "https://www.ndtv.com/world-news/ubs-to-explore-credit-suisse-deal-in-crisis-combination-report-3871538",
        "urlToImage": "https://c.ndtvimg.com/2023-03/gkbsbjr_credit-suisse_625x300_16_March_23.jpg",
        "publishedAt": "2023-03-18T03:31:00Z",
        "content": "The goal is for an announcement of a deal between the two banks by Sunday evening\r\nUBS Group AG is exploring an acquisition of all or parts of Credit Suisse Group AG at the urging of Swiss regulators… [+2864 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": null,
        "title": "President Biden May Host PM Modi For A State Dinner This Summer: Report - NDTV",
        "description": "US President Joe Biden plans to host Prime Minister Narendra Modi for a state dinner this summer, people familiar with the matter said.",
        "url": "https://www.ndtv.com/india-news/us-president-joe-biden-will-host-pm-modi-for-a-state-dinner-this-summer-report-3871558",
        "urlToImage": "https://c.ndtvimg.com/2022-11/ofgtt38o_pm-modi-biden_625x300_15_November_22.jpg",
        "publishedAt": "2023-03-18T03:21:00Z",
        "content": "US political leaders have sought to strengthen ties with PM Modi.\r\nNew Delhi/Washington: US President Joe Biden plans to host Prime Minister Narendra Modi for a state dinner this summer, people famil… [+1878 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "Yagya Sharma",
        "title": "Light rain in Delhi, Noida; brings respite from warm weather - Hindustan Times",
        "description": "Delhi-NCR woke up to light rainfall on Saturday morning, bringing in much-needed respite from soaring temperatures. | Latest News Delhi",
        "url": "https://www.hindustantimes.com/cities/delhi-news/light-rain-in-delhi-noida-brings-respite-from-warm-weather-101679103226336.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/03/18/1600x900/delhi_1679107090326_1679107090563_1679107090563.jpeg",
        "publishedAt": "2023-03-18T02:40:48Z",
        "content": "Parts of Delhi, Noida and adjoining cities on Saturday witnessed light rainfall after a series of predictions for the same by the Met Department in the last few days.\r\nDelhi rain: The national capita… [+1446 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Bitcoin.com"
        },
        "author": "Kevin Helms",
        "title": "Indian Central Bank Chief: US Banking Crisis Clearly Shows Risks Crypto Poses to the Financial System – Regulation Bitcoin News - Bitcoin News",
        "description": "The governor of India's central bank says the U.S. banking crisis clearly demonstrates the risks crypto poses to the financial system.",
        "url": "https://news.bitcoin.com/indian-central-bank-chief-us-banking-crisis-clearly-shows-risks-crypto-poses-to-the-financial-system/",
        "urlToImage": "https://static.news.bitcoin.com/wp-content/uploads/2023/03/rbi.jpg",
        "publishedAt": "2023-03-18T02:30:14Z",
        "content": "The governor of Indias central bank, the Reserve Bank of India (RBI), says the ongoing U.S. banking crisis clearly demonstrates the risks cryptocurrency poses to the financial system. The central ban… [+2848 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Zoom"
        },
        "author": "Sushmita Dey",
        "title": "Zwigato box office collection day 1: Kapil Sharma starrer off to slow start, mints Rs 0.40 crore - Times Now",
        "description": "Zwigato which stars actor-comedian Kapil Sharma in the lead, hit the theatres on Friday (March 17). Here's take a look at the box office collection of Day 1.",
        "url": "https://www.timesnownews.com/entertainment-news/zwigato-box-office-collection-day-1-kapil-sharma-starrer-off-to-slow-start-mints-rs-0-40-crore-bollywood-news-article-98745263",
        "urlToImage": "https://static.tnn.in/thumb/msid-98745263,updatedat-1679105781705,width-1280,height-720,resizemode-75/98745263.jpg",
        "publishedAt": "2023-03-18T02:16:21Z",
        "content": "Aquarius, start exploring business ideas; daily horoscope for all zodiac signs today, March 17, 2023"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "SpaceX completes doubleheader with launch of SES satellites, nails landing - VideoFromSpace",
        "description": "A SpaceX Falcon 9 rocket launched the  SES-18 and SES-19 telecommunications satellites from Cape Canaveral Space Force Station in Florida on March 17, 2023. ...",
        "url": "https://www.youtube.com/watch?v=IzyW3AGRWlI",
        "urlToImage": "https://i.ytimg.com/vi/IzyW3AGRWlI/maxresdefault.jpg",
        "publishedAt": "2023-03-18T02:15:16Z",
        "content": null
    }
]
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false
    }
  }
  render() {
    let { headline } = this.props;
    return (
      <div className='container my-3'>
        <h2 className='heading'>{headline}</h2>
        <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-4'>
          {/* TODO News URL */}
          {this.state.articles.map((article) => {
            return <div className='col'  key={article.url}>
              <NewsItem title={article.title.substring(0, 45) + "..."} description={article.description.substring(0, 88) + "..."} imgUrl={article.urlToImage} newsUrl={article.url} />
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default News