import Home3Header from "../../Component/Headers/Home3Header";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";
import { blogs } from "../../Data/blog";
import BlogCard from "../../Component/Cards/BlogCard";

import GotoTop from "../../Component/GotoTop";

function Committee() {
   return(
      <>
        <Home3Header  joinBtn={true} />
        <Banner title="Committee" background="assets/images/inner-banner.jpg" />
        <section className="blogpage-section">
          <div className="container">
            <h3 style={{ textAlign: "center", marginBottom: "50px" }}>Committee</h3>
            <div className="row">
              <div className="col-lg-12 col-md-10">
                <div className="row">
                  {blogs.map((blog) => (
                    <BlogCard blog={blog} key={blog.id} className="col-lg-4" />
                  ))}
                </div>
              </div>
            </div>
            <h3 style={{ textAlign: "center", margin: "50px 0px" }}>Organizing  Committee</h3>
            <div className="row">
              <div className="col-md-6">
                <ul className="orgnize_ul">
                  <li><b>Dr. A. Manikandan</b>, Associate Professor, Department of Chemistry, KAHE.</li>
                  <li><b>Dr. D. Manoj</b>, Associate Professor, Department of Chemistry, KAHE.</li>
                  <li><b>Dr. S. Rajamanikandan</b>, Associate Professor, Department of Biochemistry, KAHE.</li>
                  <li><b>Dr. R. Suresh</b>, Associate Professor, Department of Chemistry, KAHE.</li>
                  <li><b>Dr. V. Kavimani</b>, Assistant Professor, Department of Mechanical Engineering, KAHE.</li>
                  <li><b>Dr. V. Siva</b>, Assistant Professor, Department of Physics, KAHE.</li>
                  <li><b>Mr. R. Suresh Balaji</b>,  Assistant Professor, Department of Mechanical Engineering, KAHE.</li>
                  <li><b>Ms. V. Kaladevi</b>, Assistant Professor, Department of Science and Humanities, KAHE.</li>
                  <li><b>Mr. A. Daniel Das</b>, Assistant Professor, Department of Mechanical Engineering, KAHE.</li>

                </ul>
              </div>
              <div className="col-md-6">
                <ul className="orgnize_ul">
                  <li><b>Dr. G. Kalaiarasi</b>, Assistant Professor, Department of Chemistry, KAHE.</li>
                  <li><b>Dr. A. Shameem</b>, Assistant Professor, Department of Science and Humanities, KAHE.</li>
                  <li><b>Dr. K. Manikandan</b>, Assistant Professor, Department of Physics, KAHE.</li>
                  <li><b>Dr. M. Gomathi</b>, Assistant Professor, Department of Biotechnology, KAHE.</li>
                  <li><b>Dr. M. Bharathi</b>, Assistant Professor, Department of Biochemistry, KAHE.</li>
                  <li><b>Dr. V. Dhivya</b>, Assistant Professor, Department of Biotechnology, KAHE.</li>
                  <li><b>Dr. D. Prabhu</b>,  Assistant Professor, Department of Biochemistry, KAHE.</li>
                </ul>
              </div>
            </div>

            <h3 style={{ textAlign: "center", margin: "50px 0px" }}>International Advisory Committee</h3>
            <div className="row">
              <div className="col-md-6">
                <ul className="orgnize_ul">
                  <li><b>Prof. Dongjin Choi</b>, Hongik University, Sejong-city, South Korea.</li>
                  <li><b>Prof. Sarute Ummartyotin</b>, Thammasat University, Bangkok, Thailand.</li>
                  <li><b>Prof. Stefan Antohe</b>, University of Bucharest, Bucharest, Romania.</li>
                  <li><b>Prof. Okazaki Masakazu</b>, Nagaoka University of Technology, Japan.</li>
                  <li><b>Prof. Daniel Braithwaite</b>, Advanced Materials and Correlated Electron Physics Team, CEA, Grenoble, France.</li>
                  <li><b>Prof. M.V. Reddy</b>, Nouveau Monde Graphite, Montreal, QC, Canada.</li>
                  <li><b>Prof. Mariadhas Valan Arasu</b>,  King Saud University, Riyadh, Saudi Arabia.</li>
                  <li><b>Prof.  K. Karuppasamy</b>,  Dongguk University-Seoul, South Korea.</li>
                  <li><b>Prof.. Suresh Sagadevan</b>, Universiti Malaya, Malaysia.</li>
                  <li><b>Prof. Ramesh T Subramaniam</b>, University of Malaya, Kuala Lumpur, Malaysia.</li>
                  <li><b>Prof. Yoshiya Uwatoko</b>, University of Tokyo, Japan. </li>
                  <li><b>Prof. Selvan Bellan</b>, Niigata University, Japan.</li>
                  <li><b>Prof. Sang Ouk Kim</b>,  KAIST, Daejeon, Republic of Korea.</li>

                </ul>
              </div>
              <div className="col-md-6">
                <ul className="orgnize_ul">
                  <li><b>Prof. Lee Hwei Voon</b>, University of Malaya, Malaysia.</li>
                  <li><b>Dr. Vijayshankar Asokan</b>, Chalmers University of Technology, Sweden.</li>
                  <li><b>Dr. Chelladurai Karuppiah</b>, Mingchi University of Technology, Taiwan.</li>
                  <li><b>Dr. Ananthakumar Soosaimanickam</b>, Intercomet S.L., Madrid, Spain.</li>
                  <li><b>Prof. Abdulhadi Baykal</b>,Istanbul Aydın University , Turkey.</li>
                  <li><b>Prof. Yassine Slimani</b>, Imam Abdul Rahman bin Faisal University, Saudi Arabia.</li>
                  <li><b>Prof. Mohammad Jawaid</b>,  Universiti Putra Malaysia, Malaysia.</li>
                  <li><b>Prof. M. Maaza</b>, UNESCO UNISA Africa Chair in Nanosciences & Nanotechnology, South Africa.</li>
                  <li><b>Prof. Mohamed Henini</b>, University of Nottingham, UK.</li>
                  <li><b>Prof. Arun Thirumurugan</b>, University of Atacama, Chile.</li>
                  <li><b>Prof. Mosae Selvakumar Paulraj</b>, Asian University for Women Chittagong, Bangladesh.</li>

                </ul>
              </div>
            </div>

            <h3 style={{ textAlign: "center", margin: "50px 0px" }}>National Advisory Committee</h3>
            <div className="row">
              <div className="col-md-6">
                <ul className="orgnize_ul">
                  <li><b>Prof. A.Thamizavel</b>, Tata Institute of Fundamental Research, Mumbai.</li>
                  <li><b>Prof. N. Vijayan</b>, Senior Principal Scientist, National Physical Laboratory, New Delhi.</li>
                  <li><b>Prof. V.Rajendran</b>, Vice Chancellor, AMET university, Chennai.</li>
                  <li><b>Prof. N.V.Ramarao</b>, Defence Metallurgical Research Laboratory, Hyderabad.</li>
                  <li><b>Prof. Arun Torris</b>, CSIR – National Chemical laboratory, Pune.</li>
                  <li><b>Prof. G. Bhagavannarayana</b>, VSM Group of Institutions, RC Puram. AP.</li>
                  <li><b>Prof. Muthusankar Eswaran</b>, Indian Institute of Technology, Jammu.</li>
                  <li><b>Prof. Sanjay Singh</b>, Indian Institute of Technology (BHU), Varanasi.</li>
                  <li><b>Prof. S. Kumaran</b>, National Institute of Technology, Tiruchirappalli</li>
                  <li><b>Prof. Mhd. Ikram</b>, National Institute of Technology, Kashmir.</li>
                  <li><b>Prof. N. Ponpandian</b>, Bharathiar University, Coimbatore.</li>
                  <li><b>Prof. Manoharan</b>, Annamalai University, Chidambaram.</li>
                  <li><b>Prof. Manickam Mahendran</b>,  Thiagarajar College of Engineering, Madurai.</li>
                  <li><b>Prof. Venkatesu</b>, University of Delhi, New Delhi.</li>
                  <li><b>Prof. V. Ramasubramanian</b>, Vellore Institute of Technology, Vellore.</li>
                  <li><b>Prof. B. Karthikeyan</b>, National Institute of Technology, Tiruchirappalli.</li>
                  <li><b>Prof. Ratnesh Tiwari</b>, Dr. C.V. Raman University, Bilaspur.</li>
                  <li><b>Prof. K. Soorya Prakash</b>, Anna University Regional Campus, Coimbatore.</li>
                  <li><b>Prof. S. Udhayakumar</b>, PSG College of Technology, Coimbatore.</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="orgnize_ul">
                  <li><b>Prof. S. Muthukumaran</b>, Government Arts College, Melur, Madurai.</li>
                  <li><b>Prof. Muthu Senthil Pandian</b>, SSN College of Engineering, Chennai.</li>
                  <li><b>Prof.  A. Mahamani</b>, Vemu Insitute of Technology, Chittoor.</li>
                  <li><b>Prof. Pragati Kumar</b>, Central University of Jammu, Jammu.</li>
                  <li><b>Prof.  Dr.P.Chakkravarthy</b>, IIST, Thiruvananthapuram, Kerala.</li>
                  <li><b>Prof.  Dr.S.P.Kumaresh Babu</b>, NIT, Trichirapalli.</li>
                  <li><b>Prof.  Dr. D. Kesavan</b>, IIT, Palakad.</li>
                  <li><b>Prof. Dr. N. M. Sivaram</b>, NIT, Karaikal, Puducherry. </li>
                  <li><b>Prof. P. Mani</b>, Anna University Regional campus, Tiruchirappalli.</li>
                  <li><b>Prof. R.D. Eithiraj</b>, Vellore Institute of Technology, Chennai.</li>
                  <li><b>Prof.T.C. Sabari Girisun</b>, Bharathidasan University, Tiruchirappalli.</li>
                  <li><b>Prof. Ramalingam Gopal</b>, Alagappa University, Karaikudi.</li>
                  <li><b>Prof. Ravithej Singh</b>, Indian Institute of chemical Technology, Hyderabad.</li>
                  <li><b>Prof. P. Hemaprabha Avinashilingham</b>, Institute for Home Science and Higher Education for Women, Coimbatore.</li>
                  <li><b>Prof. K. Ramachandran</b>, SRM University, Vadapalani.</li>
                  <li><b>Prof. Govindasamy Murugadoss</b>, Sathyabama Institute Science and Technology, Chennai.</li>
                  <li><b>Prof. T. Elangovan</b>, Periyar University, Salem.</li>
                  <li><b>Prof. S. Sriram</b>, SASTRA Deemed to be University, Thanjavur.</li>
                  <li><b>Prof. Davit B. Dhruv</b>, Saurashtra University, Rajkot.</li>
                  <li><b>Prof. Pankaj Biswas</b>, Shri Mata Vaishno Devi University, Jammu. </li>
                  <li><b>Prof. Netram Kaurav</b>, Holkar Science College, Indore.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Footer />
        <GotoTop />
      </>
    );
  }

export default Committee;
