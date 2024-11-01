
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Welcome to My Blog',
      date: 'October 20, 2024',
      content: 'This is my blog. Here, I will share my thoughts, projects, and more!',
    },
    {
      id: 2,
      title: 'Assignment 1 - Photography',
      date: 'October 23, 2024',
      content: 'Camera Settings for Original Photos: \n\n Taken on a Canon EOS 250D with an 18-55mm Lens.\n\n Formal Photo: Lens: 24mm Aperture: 5 Speed: 1/200 ISO: 800\n\n Aesthetic Photo: Lens: 55mm Aperture: 5.6 Speed: 1/400 ISO: 100\n\n Passion Photo: Lens: 27mm Aperture: 5 Speed: 1/8 ISO: 400\n\n For this assignment I had to take 3 different photos which would require specific settings and conditions to fit the brief. I had to take a formal photo, an aesthetic photo and a photo that reflects my passion in life. I have added these photos to my Gallery Page.\n\n Firstly, I found taking the formal photo to be relatively straightforward however it still required some set up. I began by finding an area in my house that had a large, clean and neutral background. I then removed anything that might be in the shot and set up two main lights either side of the camera to better light the space. I also used large white foam board sheets to redirect the sunlight and use it as a bounce this allowed for better lighting from below to remove the harsh shadows caused by the main lights. This allowed me to achieve uniform lighting and make it as close to studio lighting as I could. Once I had created sufficient lighting, adjusting the settings took very little time. I played around with the ISO and aperture. I found a balance of an 800 ISO a shutter speed of 1/200 and a aperture of 5 made for the best settings. I took several photos until I found one I was happy with.\n\n  I then moved onto the next photo, the aesthetic shot. I knew I wanted to include my dog in the photo and that I wanted it to be taken outdoors. I went to a wooded area that had nice lighting and nice autumnal brown and dark greens colours. I took a multiple photos in different poses and areas of the woods, making sure to adjust my camera settings (aperture and ISO) accordingly as the lighting changed. I then chose the photo I felt looked the best with regards to lighting, colour and composition. Lastly, for the photo that reflected my passion, I wanted to portray my love of music. I originally wanted to take a picture with my bass guitar but unfortunately these didn’t come out as well as I had hope due to poor composition and I wasn’t happy with the backdrop of my house. So, I decided to use my record player as its design felt perfect for the aesthetic photo. I moved my record player from where I usually keep it to a nicer table and a less busy backdrop and began photographing it. I took some photos with me in the shot and some of just the record player. I tried some tests with a low shutter speed and the record spinning to try get a cool blurred effect but unfortunately it did not come out how I had planned so I went for a faster shutter speed for a static image. I preferred the photos where I was interacting with it so that’s the one I chose. I did struggle quite a bit with getting the camera at the right angle and the composition how I liked it to create a balanced photo.\n\n Once all the photos were taken, I brought them into Affinity Photo where I began editing them. For my Formal photo I adjusted my brightness by increasing it by 26% and I brought the contrast down by 5%, I also edited my S-Curve slightly and to add some finishing touches I cleaned up the background by covering up some dirt marks on the wall behind me using the blemish tool and some areas by hand with the brush tool making sure to colour match and blend as I went.\n\n For my Aesthetic photo I changed the brightness, increasing it by 24% and reduced the contrast by 18%, I changed the colour balances by increasing the Cyan by 19%, increasing the Green 5% and increasing the Blue by 18%, I adjusted my S-Curve to a smaller range and edited the shadows, decreasing by 24% and decreased the highlights by 18%. This was a bit of trial and error until I was happy with the final image.\n\n For my Passion photo I started by editing my brightness by increasing the value to 38% and my contrast was decreased by 18%, I then changed my S-Curve until I was satisfied and followed up with some colour balance changes, firstly increasing the Cyan by 26%, the Green by 2% and the Blue by 12%. After that, I still want fully happy with the colour balance so did a second pass, this time increasing the Cyan by a further 44%, the Magenta by 5% and the Blue by 22%.',
   
    },
   
  ];

  return (

    <div className="blog-container">

      <h1>Keelan's Blog</h1>

      <div className="blog-list">

        {blogPosts.map((post) => (

          <div key={post.id} className="blog-post">

            <h2>{post.title}</h2>

            <p className="blog-date">{post.date}</p>

            {post.content.split('\n\n').map((paragraph, index) => ( /* implemented a way to create a new paragraph within the content section of the blog post */

              <p key={index} className="blog-content">{paragraph}</p>

            ))}

          </div>

        ))}

      </div>

    </div>

  );

};


export default Blog;

