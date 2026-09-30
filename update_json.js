const fs = require('fs');
const file = 'd:/forgefit/data/templates.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

// 1. Add Breadcrumb
if (!data.common.breadcrumbs.AwardsBreadcrumb) {
  data.common.breadcrumbs.AwardsBreadcrumb = {
    title: 'AWARDS & CERTIFICATIONS',
    paths: [
      { label: 'Home', url: '/' },
      { label: 'Awards & Certifications' }
    ],
    bgImage: '/main logo/breadcrumb.jpg'
  };
}

// 2. Add page definition
data.categories.ForgeFit.templateComponents.ForgeFit.pages['awards'] = {
  components: [
    { key: 'TopBar', component: 'ForgeFitTopBar1' },
    { key: 'Header', component: 'ForgeFitHeader1' },
    { key: 'Breadcrumb', component: 'AwardsBreadcrumb' },
    { key: 'AwardsCounter', component: 'ForgeFitAwardsCounter1' },
    { key: 'AwardsMilestones', component: 'ForgeFitAwardsMilestones1' },
    { key: 'AwardsCertifications', component: 'ForgeFitAwardsCertifications1' },
    { key: 'AwardsCommitment', component: 'ForgeFitAwardsCommitment1' },
    { key: 'Footer', component: 'Footer' }
  ]
};

// 3. Add sections data
data.categories.ForgeFit.sections.AwardsCounter = {
  variants: {
    ForgeFitAwardsCounter1: {
      stats: [
        { id: 'stat-1', icon: 'FaAward', value: '25', suffix: '+', title: 'Industry Awards', description: 'Recognized for excellence' },
        { id: 'stat-2', icon: 'FaUsers', value: '10,000', suffix: '+', title: 'Happy Members', description: 'Trust our expertise' },
        { id: 'stat-3', icon: 'FaShieldAlt', value: '100', suffix: '%', title: 'Certified Trainers', description: 'Globally recognized' },
        { id: 'stat-4', icon: 'FaTrophy', value: '5', suffix: '+', title: 'Years of Impact', description: 'Building healthier lives' }
      ]
    }
  }
};

data.categories.ForgeFit.sections.AwardsMilestones = {
  variants: {
    ForgeFitAwardsMilestones1: {
      subtitle: 'OUR ACHIEVEMENTS',
      titlePart1: 'Milestones That ',
      titleHighlight: 'Motivate Us',
      description: 'Over the years, ForgeFit has been honored with prestigious awards for our dedication to fitness, community wellness and client success.',
      buttonText: 'View Our Journey',
      buttonUrl: '/about',
      backgroundImage: '/banner/hero_bg_1.jpg',
      milestones: [
        { id: 'm-1', image: '/award/award_1.png', imageAlt: 'Fitness Excellence Award', title: 'Fitness Excellence Award', year: '2023', description: 'For outstanding contribution to health & fitness.' },
        { id: 'm-2', image: '/award/award_2.png', imageAlt: 'Best Gym of the Year', title: 'Best Gym of the Year', year: '2022', description: 'Recognized for exceptional training programs.' },
        { id: 'm-3', image: '/award/award_3.png', imageAlt: 'Community Health Champion', title: 'Community Health Champion', year: '2021', description: 'For promoting a Healthier and stronger community.' },
        { id: 'm-4', image: '/award/award_4.png', imageAlt: 'Client Satisfaction Award', title: 'Client Satisfaction Award', year: '2020', description: 'For excellence in customer experience.' }
      ]
    }
  }
};

data.categories.ForgeFit.sections.AwardsCertifications = {
  variants: {
    ForgeFitAwardsCertifications1: {
      subtitle: 'OUR CERTIFICATIONS',
      titlePart1: 'Certified by ',
      titleHighlight: 'Global Standards',
      description: 'Our programs and trainers are certified by internationally recognized fitness and wellness organizations, ensuring the highest standards of safety, knowledge and professionalism.',
      buttonText: 'Our Training Standards',
      buttonUrl: '/training-programs',
      certifications: [
        { id: 'cert-1', image: '/other/1.png', imageAlt: 'NASM', title: 'NASM Certified', description: 'Globally recognized fitness certification.' },
        { id: 'cert-2', image: '/other/1.png', imageAlt: 'ACE', title: 'ACE Certified', description: 'Setting the standard in fitness education.' },
        { id: 'cert-3', image: '/other/1.png', imageAlt: 'ISSA', title: 'ISSA Certified', description: 'Trusted worldwide fitness certification.' },
        { id: 'cert-4', image: '/other/1.png', imageAlt: 'NSCA', title: 'NSCA Certified', description: 'Advancing strength and conditioning.' }
      ]
    }
  }
};

data.categories.ForgeFit.sections.AwardsCommitment = {
  variants: {
    ForgeFitAwardsCommitment1: {
      subtitle: 'OUR COMMITMENT',
      titlePart1: 'Excellence in ',
      titleHighlight: 'Every Step',
      description: 'These certifications and awards inspire us to continue raising the bar and delivering the best fitness experience for our community.',
      buttonText: 'Join Our Community',
      buttonUrl: '/contact',
      backgroundImage: '/banner/hero_bg_1.jpg',
      rightHighlightText: 'DISCIPLINE BUILDS RESULTS',
      features: [
        { id: 'feat-1', icon: 'FaShieldAlt', title: 'Safe Training', description: 'Environment' },
        { id: 'feat-2', icon: 'FaUsers', title: 'Expert', description: 'Guidance' },
        { id: 'feat-3', icon: 'FaChartBar', title: 'Real', description: 'Results' }
      ]
    }
  }
};

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log("Updated templates.json");
