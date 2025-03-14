import { IProjectData } from "../interfaces/ITypeData";
import { estateFeaturesIcon } from "./sharedVariables";




export const projects =
    [
        { "subMenu": "Renovations", "id": "renovation" },
        { "subMenu": "Interiors", "id": "interior" },
        { "subMenu": "Eden Heights", "id": "eden-heights" },
        { "subMenu": "Harbor View Residences", "id": "harbor-view-residences" },
        { "subMenu": "Aspire Gardens", "id": "aspire-gardens" },
        { "subMenu": "Prestige Valley", "id": "prestige-valley" },
        { "subMenu": "Emerald City Estates", "id": "emerald-city-estates" },
        { "subMenu": "Golden Grove Estate", "id": "golden-grove-estate" }
    ]

export const projectsBaseData = {
    "renovation": {
        "title": "Renovations",
        "description": "Breathe new life into your space with our expert renovation services. Whether it’s updating outdated layouts, repairing structural elements, or modernizing your property, we deliver high-quality results that align with your vision. Our team combines innovative techniques and premium materials to ensure a seamless transformation, creating spaces that are both functional and aesthetically pleasing.",
        "picture": "/images/pictures/projects/renovation_interior/cover.webp",
        "location": "Various Locations",
        "estate_features": [
            {
                "title": "Structural Upgrades",
                "description": "Enhancing the strength and durability of your property.",
                "icon": estateFeaturesIcon[0]
            },
            {
                "title": "Modern Layout Redesigns",
                "description": "Transforming spaces for improved functionality and style.",
                "icon": estateFeaturesIcon[1]
            },
            {
                "title": "High-Quality Materials",
                "description": "Ensuring long-lasting and premium finishes.",
                "icon": estateFeaturesIcon[2]
            },
            {
                "title": "Timely Completion",
                "description": "Efficient project management to meet your deadlines.",
                "icon": estateFeaturesIcon[3]
            },
            {
                "title": "Energy-Efficient Solutions",
                "description": "Upgrades that reduce energy consumption and costs.",
                "icon": estateFeaturesIcon[4]
            }
        ],
        "project_up_close": [
            "/images/pictures/projects/renovation_interior/bedroom.webp",
            "/images/pictures/projects/renovation_interior/room.webp",
            "/images/pictures/projects/renovation_interior/cover.webp"
        ],
        "more_projects": [
            { "title": "Acacia Deluxe1", "description": "An upgraded version of the Acacia model with additional features.", "picture": "/images/pictures/projects/eden-height.webp" },
            { "title": "Acacia Deluxe2", "description": "An upgraded version of the Acacia model with additional features.", "picture": "/images/pictures/projects/eden-height.webp" },
            { "title": "Acacia Deluxe3", "description": "An upgraded version of the Acacia model with additional features.", "picture": "/images/pictures/projects/eden-height.webp" },
            { "title": "Acacia Deluxe3", "description": "An upgraded version of the Acacia model with additional features.", "picture": "/images/pictures/projects/eden-height.webp" }
        ]
    },


    "interior": {
        "title": "Interiors",
        "description": "Discover the art of exceptional interiors with our personalized interior design services. We create spaces that reflect your personality and lifestyle, blending functionality with unmatched elegance. From concept to completion, our team ensures every detail is carefully planned and executed, bringing your dream interiors to life.",
        "picture": "/images/pictures/projects/renovation_interior/acegeld.webp",
        "location": "Various Locations",
        "estate_features": [
            {
                "title": "Custom Design Concepts",
                "description": "Tailored interior designs that suit your unique preferences.",
                "icon": estateFeaturesIcon[0]
            },
            {
                "title": "Premium Furniture Selection",
                "description": "Sourcing high-quality furniture to match your style.",
                "icon": estateFeaturesIcon[1]
            },
            {
                "title": "Lighting Design",
                "description": "Innovative lighting solutions to set the perfect mood.",
                "icon": estateFeaturesIcon[2]
            },
            {
                "title": "Material Selection",
                "description": "Choosing top-tier materials for durability and elegance.",
                "icon": estateFeaturesIcon[3]
            },
            {
                "title": "Color & Theme Coordination",
                "description": "Harmonizing colors and themes for a cohesive look.",
                "icon": estateFeaturesIcon[4]
            }
        ],
        "project_up_close": [
            "/images/pictures/projects/renovation_interior/living.webp",
            "/images/pictures/projects/renovation_interior/sitting.webp",
            "/images/pictures/projects/renovation_interior/acegeld.webp"
        ],
        "more_projects": [
            { "title": "Acacia Deluxe1", "description": "An upgraded version of the Acacia model with additional features.", "picture": "/images/pictures/projects/eden-height.webp" },
            { "title": "Acacia Deluxe2", "description": "An upgraded version of the Acacia model with additional features.", "picture": "/images/pictures/projects/eden-height.webp" },
            { "title": "Acacia Deluxe3", "description": "An upgraded version of the Acacia model with additional features.", "picture": "/images/pictures/projects/eden-height.webp" },
            { "title": "Acacia Deluxe3", "description": "An upgraded version of the Acacia model with additional features.", "picture": "/images/pictures/projects/eden-height.webp" }
        ]
    },


    "eden-heights": {
        "title": "Eden Heights",
        "description": "Welcome to Eden Heights, where luxury and elegance come together to create an unparalleled living experience. This prestigious development is more than just a residential project; it’s a sanctuary designed to elevate your lifestyle. Featuring stunning architecture, meticulously designed interiors, and state-of-the-art amenities, Eden Heights is the perfect blend of modern sophistication and timeless comfort. Located in a prime area, it offers breathtaking views, lush green spaces, and seamless connectivity to the city's most essential destinations. At Eden Heights, every detail has been thoughtfully crafted to provide an environment of peace, style, and exclusivity—making it the perfect place to call home.",
        "picture": "/images/pictures/projects/eden-height.webp",
        "location": "Lekki",
        "estate_features": [
            {
                "title": "Swimming Pool and Gym",
                "description": "Fitness and leisure amenities for a healthy lifestyle.",
                "icon": estateFeaturesIcon[0]
            },

            {
                "title": "Uninterrrupted Treated Water Supply",
                "description": "Clean, reliable water for all homes and facilities.",
                "icon": estateFeaturesIcon[1]
            },

            {
                "title": "Playground and Greenery",
                "description": "Spaces for recreation and relaxation in a natural setting.",
                "icon": estateFeaturesIcon[2]
            },

            {
                "title": "Facility Management Sevices",
                "description": "Professional maintenance of shared estate facilities.",
                "icon": estateFeaturesIcon[3]
            },

            {
                "title": "Uninterrupted Power Supply",
                "description": "Consistent electricity for a comfortable lifestyle.",
                "icon": estateFeaturesIcon[4]
            },

            {
                "title": "Commercial Hub",
                "description": "A central area for shopping, dining, and business needs.",
                "icon": estateFeaturesIcon[5]
            },

            {
                "title": "Central Security Control",
                "description": "Monitors and manages all security systems in one hub.",
                "icon": estateFeaturesIcon[6]
            },

            {
                "title": "Automatic Numberplate Recognition",
                "description": "Efficient vehicle identification for enhanced security.",
                "icon": estateFeaturesIcon[7]
            },

            {
                "title": "Pedestrian Biometric Access Control",
                "description": "Restricts access to authorized residents and guests.",
                "icon": estateFeaturesIcon[8]
            },

            {
                "title": "Facial Recognition",
                "description": "Advanced access control for secure and seamless entry.",
                "icon": estateFeaturesIcon[9]
            },

            {
                "title": "Motion Sensors",
                "description": "Detect movement to enhance security and automate lighting.",
                "icon": estateFeaturesIcon[10]
            },

            {
                "title": "Security Alarm",
                "description": "Alerts for potential threats to ensure safety.",
                "icon": estateFeaturesIcon[11]
            },

            {
                "title": "Fiber-To-The-Home",
                "description": "Direct high-speed broadband access to every home.",
                "icon": estateFeaturesIcon[12]
            },

            {
                "title": "Full Fiber-Optics Cabling Infrastructure",
                "description": "High-speed internet and seamless digital connectivity across the estate.",
                "icon": estateFeaturesIcon[13]
            },

            {
                "title": "Smart Street Lights",
                "description": "Energy-efficient lights that enhance safety and reduce power consumption.",
                "icon": estateFeaturesIcon[14]
            }
        ],
        "project_up_close": ["/images/pictures/projects/eden-height.webp", "/images/pictures/projects/eden-height.webp", "/images/pictures/projects/eden-height.webp", "/images/pictures/projects/eden-height.webp", "/images/pictures/projects/eden-height.webp", "/images/pictures/projects/eden-height.webp"],
        "more_projects": [
            { "title": "Acacia Deluxe1", "description": "An upgraded version of the Acacia model with additional features.", "picture": "/images/pictures/projects/eden-height.webp" },
            { "title": "Acacia Deluxe2", "description": "An upgraded version of the Acacia model with additional features.", "picture": "/images/pictures/projects/eden-height.webp" },
            { "title": "Acacia Deluxe3", "description": "An upgraded version of the Acacia model with additional features.", "picture": "/images/pictures/projects/eden-height.webp" },
            { "title": "Acacia Deluxe3", "description": "An upgraded version of the Acacia model with additional features.", "picture": "/images/pictures/projects/eden-height.webp" }
        ]
    },

    "harbor-view-residences": {
        "title": "Harbor View Residence",
        "description": "Harbor View Residence is the epitome of luxury coastal living. Situated along a stunning waterfront, this residential community offers breathtaking views of the harbor and beyond. With a sophisticated blend of modern design, spacious interiors, and high-end finishes, every home is crafted to provide an exceptional living experience. The residence offers exclusive amenities, including a state-of-the-art fitness center, scenic walking trails, and private beachfront access, ensuring that every moment spent here is filled with tranquility and elegance. Harbor View Residence is not just a place to live; it's a lifestyle that combines the best of waterfront living with unmatched luxury and comfort.",
        "location": "Banana Island",
        "picture": "/images/pictures/projects/harbour.webp",
        "estate_features": [
            {
                "title": "Swimming Pool and Gym",
                "description": "Fitness and leisure amenities for a healthy lifestyle.",
                "icon": estateFeaturesIcon[0]
            },

            {
                "title": "Uninterrrupted Treated Water Supply",
                "description": "Clean, reliable water for all homes and facilities.",
                "icon": estateFeaturesIcon[1]
            },

            {
                "title": "Playground and Greenery",
                "description": "Spaces for recreation and relaxation in a natural setting.",
                "icon": estateFeaturesIcon[2]
            },

            {
                "title": "Facility Management Sevices",
                "description": "Professional maintenance of shared estate facilities.",
                "icon": estateFeaturesIcon[3]
            },

            {
                "title": "Uninterrupted Power Supply",
                "description": "Consistent electricity for a comfortable lifestyle.",
                "icon": estateFeaturesIcon[4]
            },

            {
                "title": "Commercial Hub",
                "description": "A central area for shopping, dining, and business needs.",
                "icon": estateFeaturesIcon[5]
            },

            {
                "title": "Central Security Control",
                "description": "Monitors and manages all security systems in one hub.",
                "icon": estateFeaturesIcon[6]
            },

            {
                "title": "Automatic Numberplate Recognition",
                "description": "Efficient vehicle identification for enhanced security.",
                "icon": estateFeaturesIcon[7]
            },

            {
                "title": "Pedestrian Biometric Access Control",
                "description": "Restricts access to authorized residents and guests.",
                "icon": estateFeaturesIcon[8]
            },

            {
                "title": "Facial Recognition",
                "description": "Advanced access control for secure and seamless entry.",
                "icon": estateFeaturesIcon[9]
            },

            {
                "title": "Motion Sensors",
                "description": "Detect movement to enhance security and automate lighting.",
                "icon": estateFeaturesIcon[10]
            },

            {
                "title": "Security Alarm",
                "description": "Alerts for potential threats to ensure safety.",
                "icon": estateFeaturesIcon[11]
            },

            {
                "title": "Fiber-To-The-Home",
                "description": "Direct high-speed broadband access to every home.",
                "icon": estateFeaturesIcon[12]
            },

            {
                "title": "Full Fiber-Optics Cabling Infrastructure",
                "description": "High-speed internet and seamless digital connectivity across the estate.",
                "icon": estateFeaturesIcon[13]
            },

            {
                "title": "Smart Street Lights",
                "description": "Energy-efficient lights that enhance safety and reduce power consumption.",
                "icon": estateFeaturesIcon[14]
            }
        ],
        "project_up_close": ["/images/pictures/projects/harbour.webp", "/images/pictures/projects/harbour.webp", "/images/pictures/projects/harbour.webp", "/images/pictures/projects/harbour.webp", "/images/pictures/projects/harbour.webp", "/images/pictures/projects/harbour.webp"],
        "more_projects": [
            { "title": "Oak Elite", "description": "A premium version with luxurious interiors and expanded space.", "picture": "/images/pictures/projects/harbour.webp" },
            { "title": "Oak Elite", "description": "A larger variation of the Olive with expanded living areas.", "picture": "/images/pictures/projects/harbour.webp" },
            { "title": "Oak Elite", "description": "A larger variation of the Olive with expanded living areas.", "picture": "/images/pictures/projects/harbour.webp" },
            { "title": "Oak Elite", "description": "A larger variation of the Olive with expanded living areas.", "picture": "/images/pictures/projects/harbour.webp" }
        ]
    },

    "aspire-gardens": {
        "title": "Aspire Gardens",
        "description": "At Aspire Gardens, dreams are nurtured, and new beginnings are born. This vibrant residential community is carefully designed to offer homes that inspire creativity and personal growth. With modern architecture, spacious layouts, and lush green surroundings, every element of Aspire Gardens is crafted to foster a sense of belonging and connection. Ideal for young families, professionals, and retirees alike, the community provides not only a place to live but also a place to thrive. From state-of-the-art amenities to open green spaces, Aspire Gardens invites you to build the life you’ve always aspired to in a community designed for growth and well-being.",
        "location": "Victoria Island",
        "picture": "/images/pictures/projects/garden.webp",
        "estate_features": [
            {
                "title": "Swimming Pool and Gym",
                "description": "Fitness and leisure amenities for a healthy lifestyle.",
                "icon": estateFeaturesIcon[0]
            },

            {
                "title": "Uninterrrupted Treated Water Supply",
                "description": "Clean, reliable water for all homes and facilities.",
                "icon": estateFeaturesIcon[1]
            },

            {
                "title": "Playground and Greenery",
                "description": "Spaces for recreation and relaxation in a natural setting.",
                "icon": estateFeaturesIcon[2]
            },

            {
                "title": "Facility Management Sevices",
                "description": "Professional maintenance of shared estate facilities.",
                "icon": estateFeaturesIcon[3]
            },

            {
                "title": "Uninterrupted Power Supply",
                "description": "Consistent electricity for a comfortable lifestyle.",
                "icon": estateFeaturesIcon[4]
            },

            {
                "title": "Commercial Hub",
                "description": "A central area for shopping, dining, and business needs.",
                "icon": estateFeaturesIcon[5]
            },

            {
                "title": "Central Security Control",
                "description": "Monitors and manages all security systems in one hub.",
                "icon": estateFeaturesIcon[6]
            },

            {
                "title": "Automatic Numberplate Recognition",
                "description": "Efficient vehicle identification for enhanced security.",
                "icon": estateFeaturesIcon[7]
            },

            {
                "title": "Pedestrian Biometric Access Control",
                "description": "Restricts access to authorized residents and guests.",
                "icon": estateFeaturesIcon[8]
            },

            {
                "title": "Facial Recognition",
                "description": "Advanced access control for secure and seamless entry.",
                "icon": estateFeaturesIcon[9]
            },

            {
                "title": "Motion Sensors",
                "description": "Detect movement to enhance security and automate lighting.",
                "icon": estateFeaturesIcon[10]
            },

            {
                "title": "Security Alarm",
                "description": "Alerts for potential threats to ensure safety.",
                "icon": estateFeaturesIcon[11]
            },

            {
                "title": "Fiber-To-The-Home",
                "description": "Direct high-speed broadband access to every home.",
                "icon": estateFeaturesIcon[12]
            },

            {
                "title": "Full Fiber-Optics Cabling Infrastructure",
                "description": "High-speed internet and seamless digital connectivity across the estate.",
                "icon": estateFeaturesIcon[13]
            },

            {
                "title": "Smart Street Lights",
                "description": "Energy-efficient lights that enhance safety and reduce power consumption.",
                "icon": estateFeaturesIcon[14]
            }
        ],
        "project_up_close": ["/images/pictures/projects/garden.webp", "/images/pictures/projects/garden.webp", "/images/pictures/projects/garden.webp", "/images/pictures/projects/garden.webp", "/images/pictures/projects/garden.webp", "/images/pictures/projects/garden.webp"],
        "more_projects": [
            { "title": "Oakville Grande", "description": "A larger version with more luxurious amenities.", "picture": "/images/pictures/projects/garden.webp" },
            { "title": "Oakville Grande", "description": "A larger variation of the Olive with expanded living areas.", "picture": "/images/pictures/projects/garden.webp" },
            { "title": "Oakville Grande", "description": "A larger variation of the Olive with expanded living areas.", "picture": "/images/pictures/projects/garden.webp" },
            { "title": "Oakville Grande", "description": "A larger variation of the Olive with expanded living areas.", "picture": "/images/pictures/projects/garden.webp" }
        ]
    },

    "prestige-valley": {
        "title": "Prestige Valley",
        "description": "Prestige Valley redefines what it means to live in luxury. Located in a prestigious area, this estate is a true masterpiece that offers not only exquisitely designed homes but also panoramic views and a sense of exclusivity that’s hard to match. Each home is crafted with the finest materials, offering a modern, stylish aesthetic that doesn’t compromise on comfort. The community is designed to cater to your every need, with world-class amenities and a peaceful atmosphere that makes it a perfect haven for those who seek both sophistication and privacy. Prestige Valley is where luxury meets lifestyle at its best.",
        "location": "Maitaima",
        "picture": "/images/pictures/projects/valley.webp",
        "estate_features": [
            {
                "title": "Swimming Pool and Gym",
                "description": "Fitness and leisure amenities for a healthy lifestyle.",
                "icon": estateFeaturesIcon[0]
            },

            {
                "title": "Uninterrrupted Treated Water Supply",
                "description": "Clean, reliable water for all homes and facilities.",
                "icon": estateFeaturesIcon[1]
            },

            {
                "title": "Playground and Greenery",
                "description": "Spaces for recreation and relaxation in a natural setting.",
                "icon": estateFeaturesIcon[2]
            },

            {
                "title": "Facility Management Sevices",
                "description": "Professional maintenance of shared estate facilities.",
                "icon": estateFeaturesIcon[3]
            },

            {
                "title": "Uninterrupted Power Supply",
                "description": "Consistent electricity for a comfortable lifestyle.",
                "icon": estateFeaturesIcon[4]
            },

            {
                "title": "Commercial Hub",
                "description": "A central area for shopping, dining, and business needs.",
                "icon": estateFeaturesIcon[5]
            },

            {
                "title": "Central Security Control",
                "description": "Monitors and manages all security systems in one hub.",
                "icon": estateFeaturesIcon[6]
            },

            {
                "title": "Automatic Numberplate Recognition",
                "description": "Efficient vehicle identification for enhanced security.",
                "icon": estateFeaturesIcon[7]
            },

            {
                "title": "Pedestrian Biometric Access Control",
                "description": "Restricts access to authorized residents and guests.",
                "icon": estateFeaturesIcon[8]
            },

            {
                "title": "Facial Recognition",
                "description": "Advanced access control for secure and seamless entry.",
                "icon": estateFeaturesIcon[9]
            },

            {
                "title": "Motion Sensors",
                "description": "Detect movement to enhance security and automate lighting.",
                "icon": estateFeaturesIcon[10]
            },

            {
                "title": "Security Alarm",
                "description": "Alerts for potential threats to ensure safety.",
                "icon": estateFeaturesIcon[11]
            },

            {
                "title": "Fiber-To-The-Home",
                "description": "Direct high-speed broadband access to every home.",
                "icon": estateFeaturesIcon[12]
            },

            {
                "title": "Full Fiber-Optics Cabling Infrastructure",
                "description": "High-speed internet and seamless digital connectivity across the estate.",
                "icon": estateFeaturesIcon[13]
            },

            {
                "title": "Smart Street Lights",
                "description": "Energy-efficient lights that enhance safety and reduce power consumption.",
                "icon": estateFeaturesIcon[14]
            }
        ],
        "project_up_close": ["/images/pictures/projects/valley.webp", "/images/pictures/projects/valley.webp", "/images/pictures/projects/valley.webp", "/images/pictures/projects/valley.webp", "/images/pictures/projects/valley.webp", "/images/pictures/projects/valley.webp"],
        "more_projects": [
            { "title": "Scarlet Oak Prime", "description": "An upgraded Scarlet Oak with a private pool and garden.", "picture": "/images/pictures/projects/valley.webp" },
            { "title": "Scarlet Oak Prime", "description": "A larger variation of the Olive with expanded living areas.", "picture": "/images/pictures/projects/valley.webp" },
            { "title": "Scarlet Oak Prime", "description": "A larger variation of the Olive with expanded living areas.", "picture": "/images/pictures/projects/valley.webp" },
            { "title": "Scarlet Oak Prime", "description": "A larger variation of the Olive with expanded living areas.", "picture": "/images/pictures/projects/valley.webp" }
        ]
    },

    "emerald-city-estates": {
        "title": "Emerald City Estates",
        "description": "Emerald City Estates invites you to immerse yourself in a world of luxury and modern convenience. Located in a prime area with easy access to key city landmarks, this development offers a unique blend of contemporary architecture, stylish interiors, and vibrant community spaces. From the meticulously planned landscaping to the range of premium amenities, every detail has been designed with your comfort in mind. Whether you’re looking for a serene home environment or a community full of energy and life, Emerald City Estates offers an ideal living experience for individuals and families seeking a higher standard of living",
        "location": "Lekki",
        "picture": "/images/pictures/projects/emrald.webp",
        "estate_features": [
            {
                "title": "Swimming Pool and Gym",
                "description": "Fitness and leisure amenities for a healthy lifestyle.",
                "icon": estateFeaturesIcon[0]
            },

            {
                "title": "Uninterrrupted Treated Water Supply",
                "description": "Clean, reliable water for all homes and facilities.",
                "icon": estateFeaturesIcon[1]
            },

            {
                "title": "Playground and Greenery",
                "description": "Spaces for recreation and relaxation in a natural setting.",
                "icon": estateFeaturesIcon[2]
            },

            {
                "title": "Facility Management Sevices",
                "description": "Professional maintenance of shared estate facilities.",
                "icon": estateFeaturesIcon[3]
            },

            {
                "title": "Uninterrupted Power Supply",
                "description": "Consistent electricity for a comfortable lifestyle.",
                "icon": estateFeaturesIcon[4]
            },

            {
                "title": "Commercial Hub",
                "description": "A central area for shopping, dining, and business needs.",
                "icon": estateFeaturesIcon[5]
            },

            {
                "title": "Central Security Control",
                "description": "Monitors and manages all security systems in one hub.",
                "icon": estateFeaturesIcon[6]
            },

            {
                "title": "Automatic Numberplate Recognition",
                "description": "Efficient vehicle identification for enhanced security.",
                "icon": estateFeaturesIcon[7]
            },

            {
                "title": "Pedestrian Biometric Access Control",
                "description": "Restricts access to authorized residents and guests.",
                "icon": estateFeaturesIcon[8]
            },

            {
                "title": "Facial Recognition",
                "description": "Advanced access control for secure and seamless entry.",
                "icon": estateFeaturesIcon[9]
            },

            {
                "title": "Motion Sensors",
                "description": "Detect movement to enhance security and automate lighting.",
                "icon": estateFeaturesIcon[10]
            },

            {
                "title": "Security Alarm",
                "description": "Alerts for potential threats to ensure safety.",
                "icon": estateFeaturesIcon[11]
            },

            {
                "title": "Fiber-To-The-Home",
                "description": "Direct high-speed broadband access to every home.",
                "icon": estateFeaturesIcon[12]
            },

            {
                "title": "Full Fiber-Optics Cabling Infrastructure",
                "description": "High-speed internet and seamless digital connectivity across the estate.",
                "icon": estateFeaturesIcon[13]
            },

            {
                "title": "Smart Street Lights",
                "description": "Energy-efficient lights that enhance safety and reduce power consumption.",
                "icon": estateFeaturesIcon[14]
            }
        ],
        "project_up_close": ["/images/pictures/projects/emrald.webp", "/images/pictures/projects/emrald.webp", "/images/pictures/projects/emrald.webp", "/images/pictures/projects/emrald.webp", "/images/pictures/projects/emrald.webp", "/images/pictures/projects/emrald.webp"],
        "more_projects": [
            { "title": "Maple Cottage", "description": "A charming variation with enhanced outdoor living spaces.", "picture": "/images/pictures/projects/emrald.webp" },
            { "title": "Maple Cottage", "description": "A larger variation of the Olive with expanded living areas.", "picture": "/images/pictures/projects/emrald.webp" },
            { "title": "Maple Cottage", "description": "A larger variation of the Olive with expanded living areas.", "picture": "/images/pictures/projects/emrald.webp" },
            { "title": "Maple Cottage", "description": "A larger variation of the Olive with expanded living areas.", "picture": "/images/pictures/projects/emrald.webp" }
        ]
    },

    "golden-grove-estate": {
        "title": "Golden Grove Estate",
        "description": "Golden Grove Estate is where tranquility meets modern living in perfect harmony. Nestled amidst expansive green landscapes, this exclusive community offers elegantly designed homes that feature spacious interiors and thoughtful touches. The peaceful environment provides an idyllic setting for families, professionals, and retirees alike, offering a sanctuary from the hustle and bustle while still being conveniently close to urban amenities. Enjoy the perfect blend of nature, comfort, and convenience, where every day feels like a peaceful retreat.",
        "location": "Katampe",
        "picture": "/images/pictures/projects/golden.webp",
        "estate_features": [
            {
                "title": "Swimming Pool and Gym",
                "description": "Fitness and leisure amenities for a healthy lifestyle.",
                "icon": estateFeaturesIcon[0]
            },

            {
                "title": "Uninterrrupted Treated Water Supply",
                "description": "Clean, reliable water for all homes and facilities.",
                "icon": estateFeaturesIcon[1]
            },

            {
                "title": "Playground and Greenery",
                "description": "Spaces for recreation and relaxation in a natural setting.",
                "icon": estateFeaturesIcon[2]
            },

            {
                "title": "Facility Management Sevices",
                "description": "Professional maintenance of shared estate facilities.",
                "icon": estateFeaturesIcon[3]
            },

            {
                "title": "Uninterrupted Power Supply",
                "description": "Consistent electricity for a comfortable lifestyle.",
                "icon": estateFeaturesIcon[4]
            },

            {
                "title": "Commercial Hub",
                "description": "A central area for shopping, dining, and business needs.",
                "icon": estateFeaturesIcon[5]
            },

            {
                "title": "Central Security Control",
                "description": "Monitors and manages all security systems in one hub.",
                "icon": estateFeaturesIcon[6]
            },

            {
                "title": "Automatic Numberplate Recognition",
                "description": "Efficient vehicle identification for enhanced security.",
                "icon": estateFeaturesIcon[7]
            },

            {
                "title": "Pedestrian Biometric Access Control",
                "description": "Restricts access to authorized residents and guests.",
                "icon": estateFeaturesIcon[8]
            },

            {
                "title": "Facial Recognition",
                "description": "Advanced access control for secure and seamless entry.",
                "icon": estateFeaturesIcon[9]
            },

            {
                "title": "Motion Sensors",
                "description": "Detect movement to enhance security and automate lighting.",
                "icon": estateFeaturesIcon[10]
            },

            {
                "title": "Security Alarm",
                "description": "Alerts for potential threats to ensure safety.",
                "icon": estateFeaturesIcon[11]
            },

            {
                "title": "Fiber-To-The-Home",
                "description": "Direct high-speed broadband access to every home.",
                "icon": estateFeaturesIcon[12]
            },

            {
                "title": "Full Fiber-Optics Cabling Infrastructure",
                "description": "High-speed internet and seamless digital connectivity across the estate.",
                "icon": estateFeaturesIcon[13]
            },

            {
                "title": "Smart Street Lights",
                "description": "Energy-efficient lights that enhance safety and reduce power consumption.",
                "icon": estateFeaturesIcon[14]
            }
        ],
        "project_up_close": ["/images/pictures/projects/golden.webp", "/images/pictures/projects/golden.webp", "/images/pictures/projects/golden.webp", "/images/pictures/projects/golden.webp", "/images/pictures/projects/golden.webp", "/images/pictures/projects/golden.webp"],
        "more_projects": [
            { "title": "Maple Sky Penthouse", "description": "A premium penthouse with a private rooftop deck.", "picture": "/images/pictures/projects/golden.webp" },
            { "title": "Maple Sky Penthouse", "description": "A larger variation of the Olive with expanded living areas.", "picture": "/images/pictures/projects/golden.webp" },
            { "title": "Maple Sky Penthouse", "description": "A larger variation of the Olive with expanded living areas.", "picture": "/images/pictures/projects/golden.webp" },
            { "title": "Maple Sky Penthouse", "description": "A larger variation of the Olive with expanded living areas.", "picture": "/images/pictures/projects/golden.webp" }
        ]
    },

};


export const projectsData: IProjectData = projectsBaseData;