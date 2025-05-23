export type Language = 'en' | 'ms' | 'zh' | 'ta';

export type PluralForm = {
  one?: string;
  other: string;
};

type TranslationKey = string | PluralForm;

export type Translations = {
  [key: string]: TranslationKey;
};

type PluralKey = 'one' | 'other';

// Add pluralization rules
export const pluralRules = {
  en: {
    one: 'one',
    other: 'other'
  },
  ms: {
    other: 'other' // Malay doesn't distinguish between singular and plural
  },
  zh: {
    other: 'other' // Chinese doesn't distinguish between singular and plural
  },
  ta: {
    other: 'other' // Tamil doesn't distinguish between singular and plural
  }
} as const;

export const translations: Record<Language, Translations> = {
  en: {
    // Common
    back: 'Back',
    save: 'Save',
    cancel: 'Cancel',
    edit: 'Edit',
    delete: 'Delete',
    close: 'Close',

        // ToS
    tos_main_title: 'Terms of Service',
    tos_effective_date: 'Effective Date: 10 May 2025',
    tos_last_updated: 'Last Updated: 20 May 2025',
    tos_welcome: 'Welcome to Stelggin! Thank you for choosing our mobile application (“App”) — designed to help you track your diet, physical activity, and overall well-being. This Terms of Service agreement ("Terms") outlines your rights and responsibilities when using our App and services.',
    tos_agreement: 'By downloading, installing, accessing, or using the App, you agree to be bound by these Terms. If you do not agree, please do not use the App.',
    tos_section1_title: '1. Eligibility and Account Registration',
    tos_section1_intro: 'To use the App, you must be:',
    tos_section1_item1: 'At least 18 years old, or;',
    tos_section1_item2: 'If under 18, have permission from a parent or legal guardian.',
    tos_section1_info_accuracy: 'You agree to provide accurate, current, and complete information during registration and to keep your information updated. You are solely responsible for all activities that occur under your account and for safeguarding your login credentials.',
    tos_section2_title: '2. Health & Medical Disclaimer',
    tos_section2_purpose: 'The App is intended to help users monitor general health-related data such as diet, exercise, and activity levels. However, Stelggin does not offer medical advice, diagnoses, or treatment.',
    tos_section2_disclaimer: 'All content, data, and suggestions in the App are for informational purposes only and are not intended as a substitute for professional medical advice. Always consult with a licensed healthcare provider before making changes to your health regimen.',
    tos_section3_title: '3. Permitted Use and Restrictions',
    tos_section3_intro: 'You may use the App only for lawful and personal purposes. You agree not to:',
    tos_section3_item1: 'Upload false, harmful, or misleading information.',
    tos_section3_item2: 'Use the App for illegal or unauthorized purposes.',
    tos_section3_item3: 'Interfere with the operation or security of the App.',
    tos_section3_item4: "Attempt to access other users' accounts or data.",
    tos_section3_item5: 'Reverse-engineer, decompile, or modify any part of the App.',
    tos_section3_termination_right: 'We reserve the right to suspend or terminate your access for any misuse or breach of these Terms.',
    tos_section4_title: '4. User-Generated Content',
    tos_section4_license: 'By submitting health logs, entries, or any other content, you grant Stelggin a worldwide, non-exclusive, royalty-free license to use, store, analyze, and process that data solely for the purpose of providing and improving the App and its services.',
    tos_section4_representation: 'You represent that you have the right to submit such data and that it does not violate any third-party rights.',
    tos_section6_title: '5. Intellectual Property',
    tos_section6_content: 'All materials within the App, including text, graphics, logos, UI design, and software, are the exclusive property of Stelggin or its licensors. You may not copy, distribute, or exploit any part of the App without written permission.',
    tos_section7_title: '6. Availability and Modifications',
    tos_section7_content: 'Stelggin aims to provide uninterrupted access to the App, but we do not guarantee continuous availability. The App may be updated or changed at any time to improve performance or comply with legal requirements. Users will be notified of significant changes.',
    tos_section8_title: '7. Account Suspension or Termination',
    tos_section8_intro: 'Stelggin reserves the right to suspend or permanently terminate your account if you:',
    tos_section8_item1: 'Violate these Terms or applicable laws.',
    tos_section8_item2: 'Submit fraudulent or misleading data.',
    tos_section8_item3: 'Engage in behavior harmful to the App, other users, or our systems.',
    tos_section8_consequences: 'Upon termination, all licenses granted to you will immediately be revoked. You may request data deletion by contacting us.',
    tos_section9_title: '8. Limitation of Liability',
    tos_section9_intro: 'To the fullest extent permitted by law, Stelggin is not liable for:',
    tos_section9_item1: 'Any direct or indirect damages arising from your use of the App.',
    tos_section9_item2: 'Decisions made based on the App’s suggestions.',
    tos_section9_item3: 'Health consequences resulting from inaccurate data entries.',
    tos_section9_risk: 'Use of the App is at your own risk. We provide the App on an “as is” and “as available” basis without warranties of any kind.',
    tos_section10_title: '9. Governing Law and Dispute Resolution',
    tos_section10_content: 'These Terms are governed by the laws of Malaysia, without regard to its conflict of law rules. Any disputes shall be subject to the exclusive jurisdiction of the courts in Malaysia.',
    tos_section11_title: '10. Changes to Terms',
    tos_section11_content: 'We may revise these Terms from time to time. If we do, we’ll post the updated version in the App and notify you via email or push notification. Continued use of the App after updates constitutes your acceptance of the new Terms.',
    tos_section12_title: '11. Contact Us',
    tos_section12_intro: 'For questions about these Terms, your personal data, or anything else, contact us:',
    tos_contact_support_email: 'support@stelggin.com',
    tos_contact_privacy_email: 'privacy@stelggin.com',
    tos_contact_address: 'Jalan Universiti Wilayah Persekutuan 50603 Kuala Lumpur Malaysia',
    tos_contact_phone: '+60 10-293 2815',

    //Privacy Policy  
    privacy_main_title: 'Privacy Policy',
    privacy_intro_pdpa: 'We take your privacy seriously and comply with the Personal Data Protection Act 2010 (PDPA) of Malaysia.',
    privacy_collect_title: 'What We Collect:',
    privacy_collect_item_personal: 'Personal data: Name, age, gender, email address.',
    privacy_collect_item_health: 'Health data: Diet logs, physical activity, weight, fitness goals.',
    privacy_collect_item_technical: 'Technical data: Device information, app usage patterns, IP address.',
    privacy_why_collect_title: 'Why We Collect It:',
    privacy_why_collect_item_personalize: 'To provide personalized recommendations and feedback.',
    privacy_why_collect_item_improve: 'To improve our App’s features and user experience.',
    privacy_why_collect_item_support: 'To respond to user inquiries or technical support requests.',
    privacy_why_collect_item_legal: 'To fulfill legal and regulatory obligations.',
    privacy_store_protect_title: 'How We Store and Protect Your Data:',
    privacy_store_protect_item_servers: 'Data is securely stored in encrypted servers within compliant data centers.',
    privacy_store_protect_item_access: 'Access to your data is restricted to authorized personnel only.',
    privacy_store_protect_item_safeguards: 'We implement physical, administrative, and technical safeguards to prevent unauthorized access, use, or disclosure.',
    privacy_share_title: 'Who We Share It With:',
    privacy_share_item_providers: 'Only with third-party service providers (e.g., cloud hosting, analytics) under strict confidentiality agreements.',
    privacy_share_item_law: 'With law enforcement or regulators, if required by law.',
    privacy_share_item_anonymized: 'We may share anonymized data with research institutions or analytics providers.',
    privacy_share_no_sell: 'We do not sell, rent, or trade your personal data.',
    privacy_pdpa_rights_title: 'Your PDPA Rights:',
    privacy_pdpa_rights_intro: 'Under PDPA, you have the right to:',
    privacy_pdpa_rights_item_access: 'Access your personal data and request corrections.',
    privacy_pdpa_rights_item_withdraw: 'Withdraw consent for data processing (with reasonable notice).',
    privacy_pdpa_rights_item_delete: 'Request deletion of your data.',
    privacy_pdpa_rights_contact: 'To exercise these rights, email us at privacy@stelggin.com.',
    privacy_contact_us_title: 'Contact Us About Privacy',
    privacy_contact_us_text: 'If you have any questions about this Privacy Policy or our privacy practices, please contact us at:',
    privacy_contact_email_value: 'privacy@stelggin.com',
    privacy_share_item_sell: 'We do not sell, rent, or trade your personal data. We only sell necessary data anonymously (e.g., diet log, activity log, diet progress)  to trusted research institutes for diet related research purposes.',
  
    // Navigation
    home: 'Home',
    progress: 'Progress',
    settings: 'Settings',
    ai: 'Talk to Stelggin',

    // Home Screen
    goodMorning: 'Good Morning',
    haveANiceDay: 'Have a nice day',
    todaySodium: 'Today\'s Sodium',
    todayFat: 'Today\'s Fat',
    todayCalories: 'Today\'s Calories',
    todaySugar: 'Today\'s Sugar',
    sodium: 'Sodium',
    fat: 'Fat',
    calories: 'Calories',
    sugar: 'Sugar',
    latestAISuggestion: 'Latest Doctor Suggestion',
    points: 'Points',
    level: 'Level',
    cameraPermission: 'Sorry, we need camera permissions to make this work!',
    galleryPermission: 'Sorry, we need gallery permissions to make this work!',
    aiSuggestionText: 'Based on your blood sugar pattern, try eating a protein-rich snack before exercising to avoid hypoglycemia.',
    logData: 'Log Data',
    logFood: 'Log Food',
    logExercise: 'Log Exercise',
    takePicture: 'Take Picture',
    uploadImage: 'Upload Image',
    detectedNutrients: 'Detected Nutrients',
    savingData: 'Saving data...',
    success: 'Success!',
    foodDataSaved: 'Food data has been saved',
    ok: 'OK',
    errorTitle: 'Error',
    cameraErrorMessage: 'Failed to open camera',
    imagePickerErrorMessage: 'Failed to open image picker',
    addFoodLog: 'Add Food Log',
    viewExerciseLog: 'View Exercise Log',
    foodLog: 'Food Log',
    viewFoodLog: 'View Food Log',
    today: 'Today',
    thisWeek: 'This Week',
    thisMonth: 'This Month',
    all: 'All',
    invalidLoginCred: 'Invalid email or password',
    loadingDietData: 'Loading diet data...',
    processingImage: 'Processing Image...',
    loading: 'Loading',
    activity: 'activity',
    diet: 'diet',
    trend: 'trends...',
    Diet: 'Diet',
    Activity: 'Activity',
    Confirmation: 'Confirm Food',
    AiThink: 'Our AI thinks this is:',
    unknownFood: 'Unknown Food',
    correctFood: 'Is this correct?',
    yesFood: 'Yes, Correct',
    noFood: 'No, Enter Manually',
    enterFood: 'Enter Food Name',
    analyzeFood: 'Analyze This Food',
    enterFoodNamePlaceholder: 'Food Name',

    // Fitness Summary Screen
    exerciseSummary: 'Exercise Summary',
    distance: 'Distance',
    time: 'Time',
    todayActivities: 'Today\'s Activities',
    walking: 'Walking',
    from: 'from',

    // Settings Screen
    language: 'Language',
    notification: 'Notification',
    theme: 'Theme',
    about: 'About',
    profile: 'Profile',
    help: 'Help',

    // Profile Screen
    personalInfo: 'Personal Information',
    age: 'Age',
    gender: 'Gender',
    weight: 'Weight',
    height: 'Height',
    health: 'Health',
    healthCondition: 'Health Condition',
    targetDailyCalories: 'Target Daily Calories',
    maxDailySugar: 'Max Daily Sugar',
    minDailyProtein: 'Min Daily Protein',
    maxDailySodium: 'Max Daily Sodium',
    bloodSugar: 'Blood Sugar',
    bloodPressure: 'Blood Pressure',
    male: 'Male',
    female: 'Female',
    maxDailyFat: 'Max Daily Fat',

    // Progress Screen
    week: 'Week',
    month: 'Month',
    avgSugarIntake: 'Average Sugar Intake',
    avgSodiumIntake: 'Average Sodium Intake',
    avgCalorieIntake: 'Average Calorie Intake',
    avgFatIntake: 'Average Fat Intake',
    avgSteps: 'Average Steps',
    avgDistance: 'Average Distance',
    avgCaloriesBurned: 'Average Calories Burned',
    avgActiveMinutes: 'Average Active Minutes',

    stelgginAI: 'StelgginAI',
    chatHistory: 'Chat History',
    uploadFromPhone: 'Upload from Phone',
    typeMessage: 'Type a message...',
    remove: 'Remove',

    login: 'Log In',
    email: 'Email',
    emailPlaceholder: 'user@email.com',
    password: 'Password',
    forgotPassword: 'Forgot Password?',
    signUp: 'Sign Up',
    emailPasswordRequired: 'Email and password are required.',
    invalidEmail: 'Please enter a valid email address.',
    name: 'Name',
    confirmPassword: 'Confirm Password',
    allFieldsRequired: 'All fields are required.',
    passwordsDoNotMatch: 'Passwords do not match.',
    alreadyHaveAccount: 'Already have an account? Log In',

    dataUsageConsent: 'Data Usage Consent',
    dataConsentDescription: 'We collect your data to provide personalized features, including tracking and AI suggestions. By clicking \'Agree & Continue\', you confirm that you have read and agree to our Privacy Policy and Terms of Service.',
    privacyAgreement: 'I have read and agree to the Privacy Policy and Terms of Service',
    agreeAndContinue: 'Agree & Continue',

    appPermissions: 'App Permissions',
    camera: 'Camera',
    cameraPermissionDescription: 'Camera access is needed to log your food and track your meals.',
    notifications: 'Notifications',
    notificationsPermissionDescription: 'Notifications allow us to send you reminders and personalized suggestions.',
    continue: 'Continue',
    loadingProfile: 'Loading profile...',
    lastActivity: 'Last Activity',
    tos: 'Terms of Service',
    privacy: 'Privacy Policy',

    // Weekday abbreviations
    mon: 'M',
    tue: 'T',
    wed: 'W',
    thu: 'T',
    fri: 'F',
    sat: 'S',
    sun: 'S',

    timeFormat: '{{time}} AM - {{time2}} AM',

    aiGreeting: 'Hi! How can I help you today?',
    newChat: 'New Chat',
    aiResponse: 'Here is the AI response for: {{input}}',

    // Pluralization keys
    items: {
      one: '{{count}} item',
      other: '{{count}} items'
    },
    minutes: {
      one: '{{count}} minute',
      other: '{{count}} minutes'
    },
    steps: {
      one: 'step',
      other: 'steps'
    },
    calories: {
      one: 'Calorie',
      other: 'Calories'
    },
    kilometers: {
      one: '{{count}} kilometer',
      other: '{{count}} kilometers'
    },
    logout: 'Log Out',
  },
  ms: {
    // Common
    back: 'Kembali',
    save: 'Simpan',
    cancel: 'Batal',
    edit: 'Edit',
    delete: 'Padam',
    close: 'Tutup',

    // ToS
    tos_main_title: 'Terma Perkhidmatan',
    tos_effective_date: 'Tarikh Berkuatkuasa: 10 Mei 2025',
    tos_last_updated: 'Kemaskini Terakhir: 20 Mei 2025',
    tos_welcome: 'Selamat datang ke Stelggin! Terima kasih kerana memilih aplikasi mudah alih kami (“Aplikasi”) — direka untuk membantu anda menjejak pemakanan, aktiviti fizikal, dan kesejahteraan keseluruhan. Perjanjian Terma Perkhidmatan ini ("Terma") menerangkan hak dan tanggungjawab anda semasa menggunakan Aplikasi dan perkhidmatan kami.',
    tos_agreement: 'Dengan memuat turun, memasang, mengakses, atau menggunakan Aplikasi, anda bersetuju untuk terikat dengan Terma ini. Jika anda tidak bersetuju, sila jangan gunakan Aplikasi ini.',
    tos_section1_title: '1. Kelayakan dan Pendaftaran Akaun',
    tos_section1_intro: 'Untuk menggunakan Aplikasi ini, anda mestilah:',
    tos_section1_item1: 'Berumur sekurang-kurangnya 18 tahun, atau;',
    tos_section1_item2: 'Jika di bawah umur 18 tahun, mendapat kebenaran daripada ibu bapa atau penjaga sah.',
    tos_section1_info_accuracy: 'Anda bersetuju untuk memberikan maklumat yang tepat, terkini dan lengkap semasa pendaftaran serta memastikan maklumat anda sentiasa dikemas kini. Anda bertanggungjawab sepenuhnya terhadap semua aktiviti di bawah akaun anda dan keselamatan kelayakan log masuk anda.',
    tos_section2_title: '2. Penafian Kesihatan & Perubatan',
    tos_section2_purpose: 'Aplikasi ini bertujuan membantu pengguna memantau data berkaitan kesihatan secara umum seperti pemakanan, senaman, dan tahap aktiviti. Namun, Stelggin tidak memberikan nasihat, diagnosis, atau rawatan perubatan.',
    tos_section2_disclaimer: 'Segala kandungan, data dan cadangan dalam Aplikasi adalah untuk tujuan maklumat sahaja dan bukan pengganti nasihat perubatan profesional. Sentiasa dapatkan nasihat daripada penyedia penjagaan kesihatan berlesen sebelum membuat perubahan kepada rutin kesihatan anda.',
    tos_section3_title: '3. Penggunaan Yang Dibenarkan dan Sekatan',
    tos_section3_intro: 'Anda hanya boleh menggunakan Aplikasi ini untuk tujuan sah dan peribadi. Anda bersetuju untuk tidak:',
    tos_section3_item1: 'Muat naik maklumat yang palsu, membahayakan atau mengelirukan.',
    tos_section3_item2: 'Menggunakan Aplikasi untuk tujuan yang menyalahi undang-undang atau tidak dibenarkan.',
    tos_section3_item3: 'Mengganggu operasi atau keselamatan Aplikasi.',
    tos_section3_item4: 'Cuba mengakses akaun atau data pengguna lain.',
    tos_section3_item5: 'Membalikkan kejuruteraan, menyahkompil, atau mengubah mana-mana bahagian Aplikasi.',
    tos_section3_termination_right: 'Kami berhak untuk menggantung atau menamatkan akses anda atas sebarang penyalahgunaan atau pelanggaran Terma ini.',
    tos_section4_title: '4. Kandungan Dijana Pengguna',
    tos_section4_license: 'Dengan menghantar log kesihatan, entri, atau kandungan lain, anda memberi kebenaran bukan eksklusif, tanpa royalti, di seluruh dunia kepada Stelggin untuk menggunakan, menyimpan, menganalisis, dan memproses data tersebut semata-mata untuk menyediakan dan menambah baik Aplikasi dan perkhidmatannya.',
    tos_section4_representation: 'Anda mengesahkan bahawa anda mempunyai hak untuk menghantar data tersebut dan bahawa ia tidak melanggar hak mana-mana pihak ketiga.',
    tos_section6_title: '5. Harta Intelek',
    tos_section6_content: 'Semua bahan dalam Aplikasi, termasuk teks, grafik, logo, reka bentuk UI, dan perisian, adalah milik eksklusif Stelggin atau pemberi lesennya. Anda tidak dibenarkan menyalin, mengedar, atau mengeksploitasi mana-mana bahagian Aplikasi tanpa kebenaran bertulis.',
    tos_section7_title: '6. Ketersediaan dan Pengubahsuaian',
    tos_section7_content: 'Stelggin berhasrat untuk menyediakan akses tanpa gangguan kepada Aplikasi, namun kami tidak menjamin ketersediaan berterusan. Aplikasi boleh dikemas kini atau diubah pada bila-bila masa untuk meningkatkan prestasi atau mematuhi keperluan undang-undang. Pengguna akan dimaklumkan tentang perubahan besar.',
    tos_section8_title: '7. Penggantungan atau Penamatan Akaun',
    tos_section8_intro: 'Stelggin berhak untuk menggantung atau menamatkan akaun anda secara kekal jika anda:',
    tos_section8_item1: 'Melanggar Terma ini atau undang-undang yang berkenaan.',
    tos_section8_item2: 'Mengemukakan data yang palsu atau mengelirukan.',
    tos_section8_item3: 'Melakukan tingkah laku yang membahayakan Aplikasi, pengguna lain, atau sistem kami.',
    tos_section8_consequences: 'Setelah penamatan, semua lesen yang diberikan kepada anda akan dibatalkan serta-merta. Anda boleh meminta penghapusan data dengan menghubungi kami.',
    tos_section9_title: '8. Had Tanggungan',
    tos_section9_intro: 'Setakat yang dibenarkan oleh undang-undang, Stelggin tidak bertanggungjawab terhadap:',
    tos_section9_item1: 'Sebarang kerugian langsung atau tidak langsung akibat penggunaan Aplikasi.',
    tos_section9_item2: 'Keputusan yang dibuat berdasarkan cadangan Aplikasi.',
    tos_section9_item3: 'Akibat kesihatan yang berpunca daripada kemasukan data yang tidak tepat.',
    tos_section9_risk: 'Penggunaan Aplikasi adalah atas risiko anda sendiri. Kami menyediakan Aplikasi ini "seadanya" dan "seperti tersedia" tanpa sebarang jaminan.',
    tos_section10_title: '9. Undang-Undang yang Mentadbir dan Penyelesaian Pertikaian',
    tos_section10_content: 'Terma ini ditadbir oleh undang-undang Malaysia tanpa mengambil kira peraturan konflik undang-undang. Sebarang pertikaian tertakluk kepada bidang kuasa eksklusif mahkamah di Malaysia.',
    tos_section11_title: '10. Perubahan pada Terma',
    tos_section11_content: 'Kami mungkin menyemak semula Terma ini dari semasa ke semasa. Jika berlaku, kami akan memaparkan versi yang dikemas kini dalam Aplikasi dan memberitahu anda melalui emel atau notifikasi. Penggunaan berterusan Aplikasi selepas perubahan bermaksud anda menerima Terma yang baru.',
    tos_section12_title: '11. Hubungi Kami',
    tos_section12_intro: 'Untuk sebarang soalan mengenai Terma ini, data peribadi anda, atau perkara lain, hubungi kami:',
    tos_contact_support_email: 'support@stelggin.com',
    tos_contact_privacy_email: 'privacy@stelggin.com',
    tos_contact_address: 'Jalan Universiti Wilayah Persekutuan 50603 Kuala Lumpur Malaysia',
    tos_contact_phone: '+60 10-293 2815',

    //Dasar Privasi  
    privacy_main_title: 'Dasar Privasi',
    privacy_intro_pdpa: 'Kami mengambil serius tentang privasi anda dan mematuhi Akta Perlindungan Data Peribadi 2010 (PDPA) Malaysia.',
    privacy_collect_title: 'Apa Yang Kami Kumpulkan:',
    privacy_collect_item_personal: 'Data peribadi: Nama, umur, jantina, alamat emel.',
    privacy_collect_item_health: 'Data kesihatan: Log pemakanan, aktiviti fizikal, berat badan, matlamat kecergasan.',
    privacy_collect_item_technical: 'Data teknikal: Maklumat peranti, corak penggunaan aplikasi, alamat IP.',
    privacy_why_collect_title: 'Kenapa Kami Kumpulkan:',
    privacy_why_collect_item_personalize: 'Untuk memberikan cadangan dan maklum balas yang diperibadikan.',
    privacy_why_collect_item_improve: 'Untuk menambah baik ciri dan pengalaman pengguna Aplikasi kami.',
    privacy_why_collect_item_support: 'Untuk membalas pertanyaan pengguna atau permintaan sokongan teknikal.',
    privacy_why_collect_item_legal: 'Untuk memenuhi kewajipan undang-undang dan peraturan.',
    privacy_store_protect_title: 'Bagaimana Kami Menyimpan dan Melindungi Data Anda:',
    privacy_store_protect_item_servers: 'Data disimpan dengan selamat di pelayan yang disulitkan dalam pusat data yang mematuhi piawaian.',
    privacy_store_protect_item_access: 'Akses kepada data anda dihadkan kepada kakitangan yang diberi kuasa sahaja.',
    privacy_store_protect_item_safeguards: 'Kami melaksanakan langkah perlindungan fizikal, pentadbiran, dan teknikal untuk mencegah akses, penggunaan, atau pendedahan yang tidak dibenarkan.',
    privacy_share_title: 'Dengan Siapa Kami Berkongsi:',
    privacy_share_item_providers: 'Hanya dengan penyedia perkhidmatan pihak ketiga (cth. pengehosan awan, analitik) di bawah perjanjian kerahsiaan yang ketat.',
    privacy_share_item_law: 'Dengan pihak berkuasa penguatkuasaan undang-undang atau pengawal selia, jika dikehendaki oleh undang-undang.',
    privacy_share_item_anonymized: 'Kami mungkin berkongsi data tanpa identiti dengan institusi penyelidikan atau penyedia analitik.',
    privacy_share_no_sell: 'Kami tidak menjual, menyewa, atau memperdagangkan data peribadi anda.',
    privacy_pdpa_rights_title: 'Hak Anda Di Bawah PDPA:',
    privacy_pdpa_rights_intro: 'Di bawah PDPA, anda berhak untuk:',
    privacy_pdpa_rights_item_access: 'Mengakses data peribadi anda dan meminta pembetulan.',
    privacy_pdpa_rights_item_withdraw: 'Menarik balik kebenaran untuk pemprosesan data (dengan notis yang munasabah).',
    privacy_pdpa_rights_item_delete: 'Meminta penghapusan data anda.',
    privacy_pdpa_rights_contact: 'Untuk melaksanakan hak-hak ini, emel kami di privacy@stelggin.com.',
    privacy_contact_us_title: 'Hubungi Kami Mengenai Privasi',
    privacy_contact_us_text: 'Jika anda mempunyai sebarang soalan mengenai Dasar Privasi ini atau amalan privasi kami, sila hubungi kami di:',
    privacy_contact_email_value: 'privacy@stelggin.com',
    privacy_share_item_sell: 'Kami tidak menjual, menyewa, atau memperdagangkan data peribadi anda. Kami hanya menjual data yang perlu (e.g., log pemakanan, aktiviti fizikal, pemajuan pemakanan) kepada institusi penyelidikan yang dipercayai untuk tujuan penyelidikan pemakanan.',

    // Navigation
    home: 'Utama',
    progress: 'Kemajuan',
    settings: 'Tetapan',
    ai: 'Bercakap dengan Stelggin',

    // Home Screen
    goodMorning: 'Selamat Pagi',
    haveANiceDay: 'Semoga hari anda menyenangkan',
    todaySodium: 'Natrium Hari Ini',
    todayFat: 'Lemak Hari Ini',
    todayCalories: 'Kalori Hari Ini',
    todaySugar: 'Gula Hari Ini',
    sodium: 'Natrium',
    fat: 'Lemak',
    calories: 'Kalori',
    sugar: 'Gula',
    latestAISuggestion: 'Cadangan Doktor Terbaru',
    points: 'Mata',
    level: 'Tahap',
    cameraPermission: 'Maaf, kami memerlukan kebenaran kamera untuk menjalankan fungsi ini!',
    galleryPermission: 'Maaf, kami memerlukan kebenaran galeri untuk menjalankan fungsi ini!',
    aiSuggestionText: 'Berdasarkan pola gula darah anda, cuba makan makanan ringan yang kaya protein sebelum bersenam untuk mengelakkan hipoglisemia.',
    logData: 'Log Data',
    logFood: 'Log Makanan',
    logExercise: 'Log Senaman',
    takePicture: 'Ambil Gambar',
    uploadImage: 'Muat Naik Imej',
    detectedNutrients: 'Nutrien Dikesan',
    savingData: 'Menyimpan data...',
    success: 'Berjaya!',
    foodDataSaved: 'Data makanan telah disimpan',
    ok: 'OK',
    errorTitle: 'Ralat',
    cameraErrorMessage: 'Gagal membuka kamera',
    imagePickerErrorMessage: 'Gagal membuka pemilih gambar',
    addFoodLog: 'Tambah Log Makanan',
    viewExerciseLog: 'Lihat Log Senaman',
    foodLog: 'Log Makanan',
    viewFoodLog: 'Lihat Log Makanan',
    today: 'Hari Ini',
    thisWeek: 'Minggu Ini',
    thisMonth: 'Bulan Ini',
    all: 'Semua',
    invalidLoginCred: 'Salah emel atau kata laluan',
    loadingDietData: 'Memuatkan data diet...',
    processingImage: 'Memproses imej...',
    loadingProfile: 'Memuatkan profil...',
    loading: 'Memuatkan',
    activity: 'aktiviti',
    diet: 'diet',
    trend: 'trend...',
    Diet: 'Diet',
    Activity: 'Aktiviti',
    tos: 'Terma Perkhidmatan',
    privacy: 'Dasar Privasi',
    Confirmation: 'Pengesahan',
    AiThink: 'AI kami menganggarkan ini adalah:',
    unknownFood: 'Makanan Tidak Dikenalpasti',
    correctFood: 'Adakah ini betul?',
    yesFood: 'Ya, Betul',
    noFood: 'Tidak, Masukkan Secara Manual',
    enterFood: 'Masukkan Nama Makanan',
    analyzeFood: 'Analisa Makanan Ini',
    enterFoodNamePlaceholder: 'Nama Makanan',

    // Fitness Summary Screen
    exerciseSummary: 'Ringkasan Senaman',
    distance: 'Jarak',
    time: 'Masa',
    todayActivities: 'Aktiviti Hari Ini',
    walking: 'Berjalan',
    from: 'daripada',

    // Settings Screen
    language: 'Bahasa',
    notification: 'Notifikasi',
    theme: 'Tema',
    about: 'Tentang',
    profile: 'Profil',
    help: 'Bantuan',

    // Profile Screen
    personalInfo: 'Maklumat Peribadi',
    age: 'Umur',
    gender: 'Jantina',
    weight: 'Berat',
    height: 'Tinggi',
    health: 'Kesihatan',
    healthCondition: 'Keadaan Kesihatan',
    targetDailyCalories: 'Kalori Harian Sasaran',
    maxDailySugar: 'Gula Harian Maksimum',
    minDailyProtein: 'Protein Harian Minimum',
    maxDailySodium: 'Natrium Harian Maksimum',
    bloodSugar: 'Gula Darah',
    bloodPressure: 'Tekanan Darah',
    male: 'Lelaki',
    female: 'Perempuan',
    maxDailyFat: 'Lemak Harian Maksimum',

    // Progress Screen
    week: 'Minggu',
    month: 'Bulan',
    avgSugarIntake: 'Pengambilan Gula Purata',
    avgSodiumIntake: 'Pengambilan Natrium Purata',
    avgCalorieIntake: 'Pengambilan Kalori Purata',
    avgFatIntake: 'Pengambilan Lemak Purata',
    avgSteps: 'Purata Langkah',
    avgDistance: 'Jarak Purata',
    avgCaloriesBurned: 'Kalori Dibakar Purata',
    avgActiveMinutes: 'Minit Aktif Purata',

    stelgginAI: 'StelgginAI',
    chatHistory: 'Sejarah Chat',
    uploadFromPhone: 'Muat naik dari Telefon',
    typeMessage: 'Taip mesej...',
    remove: 'Padam',

    login: 'Log Masuk',
    email: 'Emel',
    emailPlaceholder: 'user@email.com',
    password: 'Kata Laluan',
    forgotPassword: 'Lupa Kata Laluan?',
    signUp: 'Daftar',
    emailPasswordRequired: 'Emel dan kata laluan diperlukan.',
    invalidEmail: 'Sila masukkan alamat emel yang sah.',
    name: 'Nama',
    confirmPassword: 'Sahkan Kata Laluan',
    allFieldsRequired: 'Semua ruangan diperlukan.',
    passwordsDoNotMatch: 'Kata laluan tidak sepadan.',
    alreadyHaveAccount: 'Sudah ada akaun? Log Masuk',

    dataUsageConsent: 'Kebenaran Penggunaan Data',
    dataConsentDescription: 'Kami mengumpul data anda untuk menyediakan ciri-ciri yang diperibadikan, termasuk penjejakan dan cadangan AI. Dengan mengklik \'Setuju & Teruskan\', anda mengesahkan bahawa anda telah membaca dan bersetuju dengan Dasar Privasi dan Terma Perkhidmatan kami.',
    privacyAgreement: 'Saya telah membaca dan bersetuju dengan Dasar Privasi dan Terma Perkhidmatan',
    agreeAndContinue: 'Setuju & Teruskan',

    appPermissions: 'Kebenaran Aplikasi',
    camera: 'Kamera',
    cameraPermissionDescription: 'Akses kamera diperlukan untuk log makanan anda dan menjejak hidangan anda.',
    notifications: 'Notifikasi',
    notificationsPermissionDescription: 'Notifikasi membolehkan kami menghantar peringatan dan cadangan yang diperibadikan.',
    continue: 'Teruskan',
    lastActivity: 'Aktiviti Terakhir',

    // Weekday abbreviations
    mon: 'I',
    tue: 'S',
    wed: 'R',
    thu: 'K',
    fri: 'J',
    sat: 'S',
    sun: 'A',

    timeFormat: '{{time}} PG - {{time2}} PG',

    aiGreeting: 'Hai! Ada apa yang boleh saya bantu hari ini?',
    newChat: 'Chat Baru',
    aiResponse: 'Ini balasan AI untuk: {{input}}',

    // Pluralization keys
    items: {
      other: '{{count}} item' // Malay doesn't distinguish between singular and plural
    },
    minutes: {
      other: '{{count}} minit'
    },
    steps: {
      other: 'langkah'
    },
    calories: {
      other: 'Kalori'
    },
    kilometers: {
      other: '{{count}} kilometer'
    },
    logout: 'Log Keluar',
  },
  zh: {
    // Common
    back: '返回',
    save: '保存',
    cancel: '取消',
    edit: '编辑',
    delete: '删除',

    // Navigation
    home: '首页',
    progress: '进度',
    settings: '设置',
    ai: 'AI',

    // Home Screen
    goodMorning: '早上好',
    haveANiceDay: '希望你今天过得愉快',
    todaySodium: '今天的钠',
    todayFat: '今天的脂肪',
    todayCalories: '今天的卡路里',
    todaySugar: '今天的糖',
    latestAISuggestion: '最新的AI建议',
    points: '点数',
    level: '等级',
    logout: '退出',

    // Fitness Summary Screen
    exerciseSummary: 'Exercise Summary',
    distance: 'Distance',
    time: 'Time',
    todayActivities: 'Today\'s Activities',
    walking: 'Walking',
    from: 'from',

    // Settings Screen
    language: 'Language',
    notification: 'Notification',
    theme: 'Theme',
    about: 'About',
    profile: 'Profile',
    help: 'Help',

    // Profile Screen
    personalInfo: 'Personal Information',
    age: 'Age',
    gender: 'Gender',
    weight: 'Weight',
    height: 'Height',
    health: 'Health',
    healthCondition: 'Health Condition',
    targetDailyCalories: 'Target Daily Calories',
    maxDailySugar: 'Max Daily Sugar',
    minDailyProtein: 'Min Daily Protein',
    maxDailySodium: 'Max Daily Sodium',
    bloodSugar: 'Blood Sugar',
    bloodPressure: 'Blood Pressure',
    male: 'Male',
    female: 'Female',
    maxDailyFat: 'Max Daily Fat',

    // Progress Screen
    week: 'Week',
    month: 'Month',
    avgSugarIntake: 'Average Sugar Intake',
    avgSodiumIntake: 'Average Sodium Intake',
    avgCalorieIntake: 'Average Calorie Intake',
    avgFatIntake: 'Average Fat Intake',
    avgSteps: 'Average Steps',
    avgDistance: 'Average Distance',
    avgCaloriesBurned: 'Average Calories Burned',
    avgActiveMinutes: 'Average Active Minutes',

    stelgginAI: 'StelgginAI',
    chatHistory: 'Chat History',
    uploadFromPhone: 'Upload from Phone',
    typeMessage: 'Type a message...',
    remove: 'Remove',

    login: 'Log In',
    email: 'Email',
    emailPlaceholder: 'user@email.com',
    password: 'Password',
    forgotPassword: 'Forgot Password?',
    signUp: 'Sign Up',
    emailPasswordRequired: 'Email and password are required.',
    invalidEmail: 'Please enter a valid email address.',
    name: 'Name',
    confirmPassword: 'Confirm Password',
    allFieldsRequired: 'All fields are required.',
    passwordsDoNotMatch: 'Passwords do not match.',
    alreadyHaveAccount: 'Already have an account? Log In',

    dataUsageConsent: 'Data Usage Consent',
    dataConsentDescription: 'We collect your data to provide personalized features, including tracking and AI suggestions. By clicking \'Agree & Continue\', you confirm that you have read and agree to our Privacy Policy and Terms of Service.',
    privacyAgreement: 'I have read and agree to the Privacy Policy and Terms of Service',
    agreeAndContinue: 'Agree & Continue',

    appPermissions: 'App Permissions',
    camera: 'Camera',
    cameraPermissionDescription: 'Camera access is needed to log your food and track your meals.',
    notifications: 'Notifications',
    notificationsPermissionDescription: 'Notifications allow us to send you reminders and personalized suggestions.',
    continue: 'Continue',

    // Weekday abbreviations
    mon: 'M',
    tue: 'T',
    wed: 'W',
    thu: 'T',
    fri: 'F',
    sat: 'S',
    sun: 'S',

    timeFormat: '{{time}} AM - {{time2}} AM',

    aiGreeting: 'Hi! How can I help you today?',
    newChat: 'New Chat',
    aiResponse: 'Here is the AI response for: {{input}}',

    // Pluralization keys
    items: {
      one: '{{count}} item',
      other: '{{count}} items'
    },
    minutes: {
      one: '{{count}} minute',
      other: '{{count}} minutes'
    },
    steps: {
      one: '{{count}} step',
      other: '{{count}} steps'
    },
    calories: {
      one: '{{count}} calorie',
      other: '{{count}} calories'
    },
    kilometers: {
      one: '{{count}} kilometer',
      other: '{{count}} kilometers'
    },
  },
  ta: {
    // Minimal Tamil translations
    logout: 'வெளியேறு',
  },
}; 