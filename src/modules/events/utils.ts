export type Event = {
  title: string;
  id: string;
  summary: string;
  date: string;
  description: string;
  location: string;
  imageSrc: string;
};

export const getEvents = (): Event[] => {
  return [
    {
      title: "Earth Day Cleanup",
      id: "stu901",
      summary: "Help keep our planet clean by volunteering for a cleanup",
      date: "2023-04-22T09:00:00Z",
      description:
        "Join us in celebrating Earth Day by volunteering for a community cleanup event. We'll be picking up litter, removing invasive species, and working to keep our planet clean and healthy. All ages and abilities are welcome, and we'll provide all the necessary equipment. Let's make a difference together!",
      location: "Various locations throughout the city",
      imageSrc: "https://picsum.photos/seed/296/3000/2000",
    },
    {
      title: "Summer Concert Series",
      id: "vwx234",
      summary: "Enjoy live music in the park all summer long",
      date: "2023-06-01T18:30:00Z",
      description:
        "Our summer concert series is back! Join us every Thursday evening for live music in the park. We have an amazing lineup of local bands and musicians, and there will be food and drinks available for purchase. Bring a blanket or lawn chair and enjoy the music under the stars.",
      location: "City Park",
      imageSrc: "https://picsum.photos/seed/696/3000/2000",
    },
    {
      title: "Wine Tasting",
      id: "yzab56",
      summary: "Sample some of the best wines from around the world",
      date: "2023-08-12T16:00:00Z",
      description:
        "Join us for an afternoon of wine tasting, featuring some of the best wines from around the world. Our expert sommelier will guide you through the tasting, and you'll get to sample a variety of different wines. There will be light appetizers provided, and bottles of wine will be available for purchase. This is a great opportunity to expand your palate and discover some new favorite wines.",
      location: "The Vineyard",
      imageSrc: "https://picsum.photos/seed/691/3000/2000",
    },
    {
      title: "Career Fair",
      id: "cde789",
      summary: "Meet with employers and explore career opportunities",
      date: "2023-09-01T10:00:00Z",
      description:
        "Looking for a new job or career opportunity? Come to our career fair! We'll have dozens of employers from a variety of industries on hand, all looking to hire talented individuals like you. Bring copies of your resume and dress to impress. There will also be workshops and seminars throughout the day to help you brush up on your job search skills.",
      location: "The Convention Center",
      imageSrc: "https://picsum.photos/seed/690/3000/2000",
    },
    {
      title: "Holiday Market",
      id: "fgh012",
      summary: "Shop for unique gifts from local vendors",
      date: "2023-12-10T12:00:00Z",
      description:
        "Get into the holiday spirit at our annual holiday market! We'll have dozens of local vendors selling handmade crafts, artisanal foods, and unique gifts for everyone on your list. There will also be live music, food trucks, and a visit from Santa Claus himself. This is a great opportunity to support local businesses and find some one-of-a-kind gifts.",
      location: "The Civic Center",
      imageSrc: "https://picsum.photos/seed/695/3000/2000",
    },
    {
      title: "Annual Charity Gala",
      id: "abc123",
      summary: "Join us for an evening of entertainment and fundraising!",
      date: "2023-08-15T19:00:00Z",
      description:
        "Our Annual Charity Gala is the highlight of the year for our organization. This year's event promises to be bigger and better than ever before. Join us for a night of fun, food, and entertainment as we raise money for a great cause. We have a fantastic lineup of performers, and our auction is full of amazing items. Come dressed to impress and ready to make a difference!",
      location: "Grand Ballroom, The Ritz-Carlton",
      imageSrc: "https://picsum.photos/seed/700/3000/2000",
    },
    {
      title: "Networking Breakfast",
      id: "def456",
      summary:
        "Meet other professionals and expand your network over breakfast",
      date: "2023-06-10T08:00:00Z",
      description:
        "Join us for our monthly networking breakfast! This is a great opportunity to meet other professionals in your industry and expand your network. We will have a guest speaker this month, who will be sharing some valuable insights about the latest trends in our field. Breakfast will be provided, so come hungry!",
      location: "The Ivy Room",
      imageSrc: "https://picsum.photos/seed/701/3000/2000",
    },
    {
      title: "Art Exhibit Opening Reception",
      id: "ghi789",
      summary: "Come celebrate the opening of our latest art exhibit",
      date: "2023-05-01T18:00:00Z",
      description:
        "We are thrilled to announce the opening of our latest art exhibit, featuring works by some of the most talented artists in the city. Join us for the opening reception, where you can meet the artists, enjoy some wine and hors d'oeuvres, and take in the beautiful artwork. This is a free event, and all are welcome!",
      location: "The Art Gallery",
      imageSrc: "https://picsum.photos/seed/721/3000/2000",
    },
    {
      title: "Community Cleanup Day",
      id: "jkl012",
      summary: "Join us in keeping our community clean and beautiful",
      date: "2023-04-22T10:00:00Z",
      description:
        "We are organizing a community cleanup day, and we need your help! Join us as we work together to pick up litter, remove graffiti, and beautify our public spaces. This is a great opportunity to make a difference in your community and meet other like-minded people. We will provide all the necessary equipment, so just bring yourself and a willingness to help!",
      location: "Meet at the Community Center",
      imageSrc: "https://picsum.photos/seed/726/3000/2000",
    },
    {
      title: "Cooking Class",
      id: "mno345",
      summary: "Learn how to make delicious Italian food",
      date: "2023-07-05T18:30:00Z",
      description:
        "Join us for a hands-on cooking class where you'll learn how to make some classic Italian dishes. Our experienced chef will guide you through the process, and you'll get to enjoy the fruits of your labor at the end of the class. This is a great opportunity to learn new skills and meet other foodies. Buon appetito!",
      location: "The Culinary Institute",
      imageSrc: "https://picsum.photos/seed/426/3000/2000",
    },
  ];
};
