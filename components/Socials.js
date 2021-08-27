// const headerNavLinks = [
//   { title: "Blog", href: "/blog" },
//   { title: "Work", href: "/work" },
//   { title: "Contact", href: "/contact" },
// ];
import Link from "next/link";

// icons from: https://iconmonstr.com/
const SocialsList = [
  {
    title: "Twitter",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      </svg>
    ),
    url: "https://twitter.com/kashyapS07",
    color: "#1DA1F2",
  },
  {
    title: "LinkedIn",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    url: "https://www.linkedin.com/in/suhas-kashyap/",
    color: "#0077b5",
  },
  {
    title: "Gtihub",
    icon: (
      <svg viewBox="0 0 92 80" xmlns="http://www.w3.org/2000/svg">
        <path d="M61.896,45.548c-3.59,0-6.502,4.026-6.502,8.996c0,4.971,2.912,8.999,6.502,8.999c3.588,0,6.498-4.028,6.498-8.999  C68.395,49.574,65.484,45.548,61.896,45.548z M84.527,22.132c0.74-1.826,0.777-12.201-3.17-22.132c0,0-9.057,0.993-22.76,10.396  C55.725,9.603,50.861,9.206,46,9.206s-9.723,0.396-12.598,1.189C19.699,0.993,10.645,0,10.645,0  C6.697,9.931,6.732,20.306,7.473,22.132C2.834,27.169,0,33.218,0,41.483c0,35.932,29.809,36.508,37.334,36.508  c1.703,0,5.088,0.004,8.666,0.009c3.578-0.005,6.965-0.009,8.666-0.009C62.191,77.991,92,77.415,92,41.483  C92,33.218,89.166,27.169,84.527,22.132z M46.141,73.574h-0.281c-18.859,0-33.545-2.252-33.545-20.58  c0-4.389,1.549-8.465,5.229-11.847c6.141-5.636,16.527-2.651,28.316-2.651c0.045,0,0.093-0.001,0.141-0.003  c0.049,0.002,0.096,0.003,0.141,0.003c11.789,0,22.178-2.984,28.316,2.651c3.68,3.382,5.229,7.458,5.229,11.847  C79.686,71.322,65,73.574,46.141,73.574z M30.104,45.548c-3.588,0-6.498,4.026-6.498,8.996c0,4.971,2.91,8.999,6.498,8.999  c3.592,0,6.502-4.028,6.502-8.999C36.605,49.574,33.695,45.548,30.104,45.548z" />
      </svg>
    ),
    url: "https://github.com/kashyap07",
    color: "#6cc644",
  },
  {
    title: "Instagram",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    url: "https://www.instagram.com/kashyap_07",
    color: "#c72d8f",
  },
  {
    title: "Youtube",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
      </svg>
    ),
    url: "https://www.youtube.com/c/SuhasKashyap07",
    color: "#ff0000",
  },
  {
    title: "Facebook",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
      </svg>
    ),
    url: "https://www.facebook.com/kashyapsuhas07",
    color: "#4267b2",
  },
  {
    title: "Email",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
      </svg>
    ),
    url: "mailto:kashyapsuhas07@gmail.com",
    color: "#ffcc00",
  },
];

const Socials = () => {
  return (
    <div
      data-component="socials-wrapper"
      className={`flex flex-col gap-3 justify-center p-10`}
    >
      {SocialsList.map((social) => {
        return (
          <Link key={social.title} href={social.url} passHref>
            <a
              target="_blank"
              className="social-icon"
              style={{ "--highlight-color": social.color }}
            >
              {social.icon}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
