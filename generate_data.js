const fs = require('fs');
const path = require('path');

const colleges = [];

const iits = [
  { name: "IIT Madras - Indian Institute of Technology", city: "Chennai", state: "Tamil Nadu", type: "Public" },
  { name: "IIT Delhi - Indian Institute of Technology", city: "New Delhi", state: "Delhi", type: "Public" },
  { name: "IIT Bombay - Indian Institute of Technology", city: "Mumbai", state: "Maharashtra", type: "Public" },
  { name: "IIT Kanpur - Indian Institute of Technology", city: "Kanpur", state: "Uttar Pradesh", type: "Public" },
  { name: "IIT Kharagpur - Indian Institute of Technology", city: "Kharagpur", state: "West Bengal", type: "Public" },
  { name: "IIT Roorkee - Indian Institute of Technology", city: "Roorkee", state: "Uttarakhand", type: "Public" },
  { name: "IIT Guwahati - Indian Institute of Technology", city: "Guwahati", state: "Assam", type: "Public" },
  { name: "IIT Hyderabad - Indian Institute of Technology", city: "Hyderabad", state: "Telangana", type: "Public" },
  { name: "IIT Indore - Indian Institute of Technology", city: "Indore", state: "Madhya Pradesh", type: "Public" },
  { name: "IIT Varanasi (BHU) - Indian Institute of Technology", city: "Varanasi", state: "Uttar Pradesh", type: "Public" },
  { name: "IIT Dhanbad (ISM) - Indian Institute of Technology", city: "Dhanbad", state: "Jharkhand", type: "Public" },
  { name: "IIT Bhubaneswar - Indian Institute of Technology", city: "Bhubaneswar", state: "Odisha", type: "Public" },
  { name: "IIT Gandhinagar - Indian Institute of Technology", city: "Gandhinagar", state: "Gujarat", type: "Public" },
  { name: "IIT Ropar - Indian Institute of Technology", city: "Rupnagar", state: "Punjab", type: "Public" },
  { name: "IIT Patna - Indian Institute of Technology", city: "Patna", state: "Bihar", type: "Public" },
  { name: "IIT Mandi - Indian Institute of Technology", city: "Mandi", state: "Himachal Pradesh", type: "Public" },
  { name: "IIT Jodhpur - Indian Institute of Technology", city: "Jodhpur", state: "Rajasthan", type: "Public" },
  { name: "IIT Tirupati - Indian Institute of Technology", city: "Tirupati", state: "Andhra Pradesh", type: "Public" },
  { name: "IIT Bhilai - Indian Institute of Technology", city: "Bhilai", state: "Chhattisgarh", type: "Public" },
  { name: "IIT Goa - Indian Institute of Technology", city: "Ponda", state: "Goa", type: "Public" },
  { name: "IIT Jammu - Indian Institute of Technology", city: "Jammu", state: "Jammu and Kashmir", type: "Public" },
  { name: "IIT Dharwad - Indian Institute of Technology", city: "Dharwad", state: "Karnataka", type: "Public" },
  { name: "IIT Palakkad - Indian Institute of Technology", city: "Palakkad", state: "Kerala", type: "Public" }
];

const nits = [
  { name: "NIT Trichy - National Institute of Technology", city: "Tiruchirappalli", state: "Tamil Nadu", type: "Public" },
  { name: "NIT Surathkal - National Institute of Technology", city: "Mangalore", state: "Karnataka", type: "Public" },
  { name: "NIT Rourkela - National Institute of Technology", city: "Rourkela", state: "Odisha", type: "Public" },
  { name: "NIT Warangal - National Institute of Technology", city: "Warangal", state: "Telangana", type: "Public" },
  { name: "NIT Calicut - National Institute of Technology", city: "Kozhikode", state: "Kerala", type: "Public" },
  { name: "MNIT Jaipur - Malaviya National Institute of Technology", city: "Jaipur", state: "Rajasthan", type: "Public" },
  { name: "VNIT Nagpur - Visvesvaraya National Institute of Technology", city: "Nagpur", state: "Maharashtra", type: "Public" },
  { name: "NIT Kurukshetra - National Institute of Technology", city: "Kurukshetra", state: "Haryana", type: "Public" },
  { name: "NIT Silchar - National Institute of Technology", city: "Silchar", state: "Assam", type: "Public" },
  { name: "NIT Durgapur - National Institute of Technology", city: "Durgapur", state: "West Bengal", type: "Public" },
  { name: "MNNIT Allahabad - Motilal Nehru National Institute of Technology", city: "Prayagraj", state: "Uttar Pradesh", type: "Public" },
  { name: "NIT Jalandhar - Dr. B. R. Ambedkar National Institute of Technology", city: "Jalandhar", state: "Punjab", type: "Public" },
  { name: "NIT Meghalaya - National Institute of Technology", city: "Shillong", state: "Meghalaya", type: "Public" },
  { name: "MANIT Bhopal - Maulana Azad National Institute of Technology", city: "Bhopal", state: "Madhya Pradesh", type: "Public" },
  { name: "NIT Raipur - National Institute of Technology", city: "Raipur", state: "Chhattisgarh", type: "Public" },
  { name: "NIT Agartala - National Institute of Technology", city: "Agartala", state: "Tripura", type: "Public" },
  { name: "NIT Goa - National Institute of Technology", city: "Ponda", state: "Goa", type: "Public" },
  { name: "NIT Jamshedpur - National Institute of Technology", city: "Jamshedpur", state: "Jharkhand", type: "Public" },
  { name: "NIT Patna - National Institute of Technology", city: "Patna", state: "Bihar", type: "Public" },
  { name: "NIT Hamirpur - National Institute of Technology", city: "Hamirpur", state: "Himachal Pradesh", type: "Public" },
  { name: "NIT Puducherry - National Institute of Technology", city: "Karaikal", state: "Puducherry", type: "Public" },
  { name: "NIT Manipur - National Institute of Technology", city: "Imphal", state: "Manipur", type: "Public" },
  { name: "NIT Arunachal Pradesh - National Institute of Technology", city: "Yupia", state: "Arunachal Pradesh", type: "Public" },
  { name: "NIT Srinagar - National Institute of Technology", city: "Srinagar", state: "Jammu and Kashmir", type: "Public" },
  { name: "NIT Delhi - National Institute of Technology", city: "New Delhi", state: "Delhi", type: "Public" },
  { name: "NIT Mizoram - National Institute of Technology", city: "Aizawl", state: "Mizoram", type: "Public" },
  { name: "NIT Nagaland - National Institute of Technology", city: "Dimapur", state: "Nagaland", type: "Public" },
  { name: "NIT Sikkim - National Institute of Technology", city: "Ravangla", state: "Sikkim", type: "Public" },
  { name: "NIT Uttarakhand - National Institute of Technology", city: "Srinagar", state: "Uttarakhand", type: "Public" },
  { name: "NIT Andhra Pradesh - National Institute of Technology", city: "Tadepalligudem", state: "Andhra Pradesh", type: "Public" }
];

const privates = [
  { name: "BITS Pilani - Birla Institute of Technology and Science", city: "Pilani", state: "Rajasthan", type: "Private" },
  { name: "VIT Vellore - Vellore Institute of Technology", city: "Vellore", state: "Tamil Nadu", type: "Private" },
  { name: "Manipal Institute of Technology", city: "Manipal", state: "Karnataka", type: "Private" },
  { name: "SRM Institute of Science and Technology", city: "Chennai", state: "Tamil Nadu", type: "Private" },
  { name: "Amity University", city: "Noida", state: "Uttar Pradesh", type: "Private" },
  { name: "Lovely Professional University", city: "Phagwara", state: "Punjab", type: "Private" },
  { name: "Thapar Institute of Engineering and Technology", city: "Patiala", state: "Punjab", type: "Private" },
  { name: "PES University", city: "Bangalore", state: "Karnataka", type: "Private" },
  { name: "RV College of Engineering", city: "Bangalore", state: "Karnataka", type: "Private" },
  { name: "MSRIT - Ramaiah Institute of Technology", city: "Bangalore", state: "Karnataka", type: "Private" },
  { name: "JSS Academy of Technical Education", city: "Bangalore", state: "Karnataka", type: "Private" },
  { name: "BMS College of Engineering", city: "Bangalore", state: "Karnataka", type: "Private" },
  { name: "SASTRA Deemed University", city: "Thanjavur", state: "Tamil Nadu", type: "Private" },
  { name: "Symbiosis Institute of Technology", city: "Pune", state: "Maharashtra", type: "Private" }
];

let rankCounter = 1;

function generateColleges(list, categoryStr, tagsBase, isIIT) {
  for (const item of list) {
    const isPrivate = item.type === "Private";
    const fees = isPrivate ? 400000 + Math.floor(Math.random() * 200000) : 220000;
    
    let tags = [...tagsBase];
    if (isIIT) tags.push("IIT");
    else if (item.name.includes("NIT")) tags.push("NIT");
    else if (isPrivate) tags.push("Deemed");

    colleges.push({
      name: item.name,
      location: `${item.city}, ${item.state}`,
      state: item.state,
      city: item.city,
      type: item.type,
      category: categoryStr,
      rating: parseFloat((4.0 + Math.random() * 1.0).toFixed(1)),
      totalFees: fees,
      nirfRank: rankCounter++,
      established: 1950 + Math.floor(Math.random() * 50),
      website: `https://www.${item.name.split(" ")[0].toLowerCase()}.ac.in`,
      phone: "+91-1234567890",
      accreditation: isPrivate ? "NAAC A++" : "NBA",
      imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000",
      overview: `${item.name} is one of the premier institutes for ${categoryStr} in India. It is located in ${item.city}, ${item.state}. The campus provides excellent facilities and outstanding placement records.`,
      tags: tags,
      courses: [
        { name: "B.Tech Computer Science", duration: "4 Years", fees: fees },
        { name: "B.Tech Electronics", duration: "4 Years", fees: fees },
        { name: "B.Tech Mechanical", duration: "4 Years", fees: fees }
      ],
      placements: [
        {
          year: 2024,
          averagePackage: isPrivate ? 800000 + Math.floor(Math.random()*400000) : 1500000 + Math.floor(Math.random()*1000000),
          highestPackage: isPrivate ? 4000000 + Math.floor(Math.random()*2000000) : 10000000 + Math.floor(Math.random()*5000000),
          placementRate: 85 + Math.random() * 14
        }
      ],
      reviews: [
        { author: "Rahul K.", rating: 4.5, comment: "Great campus life and excellent placements." },
        { author: "Sneha P.", rating: 4.0, comment: "Academics are rigorous, but the faculty is very supportive." }
      ]
    });
  }
}

generateColleges(iits, "Engineering", ["Central University", "Autonomous"], true);
generateColleges(nits, "Engineering", ["Central University", "Autonomous"], false);
generateColleges(privates, "Engineering", ["Autonomous"], false);

const dir = path.join(__dirname, 'prisma', 'data');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

fs.writeFileSync(path.join(dir, 'colleges.json'), JSON.stringify(colleges, null, 2));
console.log(`Generated ${colleges.length} colleges in prisma/data/colleges.json`);
