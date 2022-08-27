<?php

/**********************************Company Settings******************************************/
$config['map_lat'] = '43.67023';
$config['map_lon'] = '-79.38676';
$config['map_center'] = $config['map_lat'] . ', ' . $config['map_lon'];

$config['office_lat'] = '43.6061826';
$config['office_lon'] = '-79.5211258';
$config['office_location'] = $config['office_lat'] . ', ' . $config['office_lon'];

$config['autocomplete_restriction'] = 'ca';
$config['tasks_polygons'] = [
    [
        'points' => ['43.912159,-79.6031859', '43.632646, -79.469625', '43.64538,-79.3524589', '43.8156541,-79.0596242', '44.0209796,-79.1603686'],
        'fillColor' => 'yellow',
        'fillOpacity' => '0.1'
    ], [
        'points' => ['43.912159,-79.6031859', '43.632646, -79.469625', '43.4503779,-79.6712785', '43.5701106,-79.828423'],
        'fillColor' => 'yellow',
        'fillOpacity' => '0.1'
    ]
];
$config['leads_polylines'] = [
    array('43.962058, -79.392919', '43.954229, -79.392609', '43.943908, -79.390848', '43.939334, -79.389389', '43.936258, -79.389292', '43.933152, -79.389608', '43.929693, -79.390064', '43.926966, -79.390029', '43.925148, -79.389783', '43.919289, -79.388381', '43.902603, -79.384450', '43.864201, -79.374958', '43.844286, -79.369796', '43.818687, -79.359874', '43.817141, -79.359003', '43.815159, -79.356900', '43.813518, -79.353124', '43.811319, -79.348274', '43.809368, -79.346643', '43.799736, -79.344541', '43.768073, -79.337432', '43.766230, -79.363562', '43.765653, -79.375409', '43.761587, -79.394318', '43.759523, -79.399082', '43.754810, -79.406155', '43.749002, -79.415759', '43.746460, -79.417433', '43.733174, -79.438633', '43.731655, -79.441380', '43.729825, -79.448547', '43.727081, -79.448139', '43.723499, -79.447130', '43.712245, -79.442617', '43.709024, -79.440889', '43.705080, -79.438434', '43.698637, -79.436252', '43.701006, -79.425535', '43.636414, -79.399630'),
    array('43.938993, -79.661472', '43.909727, -79.654412', '43.905919, -79.653561', '43.863364, -79.643578', '43.857540, -79.642192', '43.854358, -79.641094', '43.847371, -79.635125', '43.845957, -79.632566', '43.843839, -79.627766', '43.834708, -79.620151', '43.832415, -79.617599', '43.830281, -79.613994', '43.829112, -79.611773', '43.826988, -79.609828', '43.821840, -79.606947', '43.820114, -79.605186', '43.813704, -79.595085', '43.811540, -79.591522', '43.809501, -79.588699', '43.803483, -79.584959', '43.792518, -79.584535', '43.791272, -79.584894', '43.790551, -79.585223', '43.790042, -79.585695', '43.789300, -79.586738', '43.788826, -79.587788', '43.788467, -79.588384', '43.787974, -79.588812', '43.787011, -79.588949', '43.785756, -79.588698', '43.784851, -79.589052', '43.783883, -79.589987', '43.783054, -79.590242', '43.782461, -79.590271', '43.781970, -79.590134', '43.780699, -79.589403', '43.780699, -79.589403', '43.779177, -79.586459', '43.777017, -79.582753', '43.775529, -79.581078', '43.774190, -79.580160', '43.773079, -79.579550', '43.771948, -79.579326', '43.771162, -79.579302', '43.769794, -79.578689', '43.768271, -79.577576', '43.766420, -79.576269', '43.756464, -79.569251', '43.750566, -79.567960', '43.748934, -79.568121', '43.747036, -79.568652', '43.745160, -79.568545', '43.742858, -79.567869', '43.723131, -79.558805', '43.709701, -79.552344', '43.693172, -79.568440', '43.677053, -79.577578', '43.677053, -79.577578', '43.613437, -79.549539', '43.593199, -79.541281', '43.593199, -79.541281', '43.592603, -79.541808', '43.586843, -79.539084')
];
$config['stumps_polygons'] = [
    55 => [
        'points' => array('43.865404, -79.643793', '43.848888, -79.635923', '43.852632, -79.614616', '43.870772, -79.618741'),
        'strokeColor' => '#7CFC00'
    ],
    48 => [
        'points' => array('43.870827, -79.618526', '43.852628, -79.614374', '43.858055, -79.591312', '43.875741, -79.594734'),
        'strokeColor' => '#FFFF00'
    ],
    41 => [
        'points' => array('43.875801, -79.594512', '43.881531, -79.569181', '43.863091, -79.565068', '43.858223, -79.590455'),
        'strokeColor' => '#BA55D3'
    ],
    34 => [
        'points' => array('43.881559, -79.568962', '43.863189, -79.564607', '43.868609, -79.541345', '43.886124, -79.545179'),
        'strokeColor' => '#FFFF00'
    ],
    27 => [
        'points' => array('43.886414, -79.545029', '43.868686, -79.540814', '43.873416, -79.516796', '43.891581, -79.521049'),
        'strokeColor' => '#FFA500'
    ],
    20 => [
        'points' => array('43.891666, -79.520716', '43.873453, -79.516477', '43.879431, -79.491974', '43.897434, -79.496311'),
        'strokeColor' => '#0000FF'
    ],
    13 => [
        'points' => array('43.896746, -79.495796', '43.879475, -79.491613', '43.884189, -79.467666', '43.902122, -79.471974'),
        'strokeColor' => '#FF0000'
    ],

    12 => [
        'points' => array('43.883903, -79.467591', '43.866159, -79.463234', '43.861440, -79.487430', '43.879291, -79.491661'),
        'strokeColor' => '#0000FF'
    ],
    19 => [
        'points' => array('43.879280, -79.491864', '43.861341, -79.487644', '43.855622, -79.512339', '43.873314, -79.516456'),
        'strokeColor' => '#BA55D3'
    ],
    26 => [
        'points' => array('43.873167, -79.516746', '43.854995, -79.512558', '43.849776, -79.536529', '43.868359, -79.540803'),
        'strokeColor' => '#FF0000'
    ],
    33 => [
        'points' => array('43.868142, -79.541243', '43.849633, -79.537012', '43.845014, -79.560434', '43.862996, -79.564600'),
        'strokeColor' => '#7CFC00'
    ],
    40 => [
        'points' => array('43.862946, -79.564857', '43.845022, -79.560863', '43.839848, -79.586194', '43.858047, -79.590429'),
        'strokeColor' => '#FFA500'
    ],
    47 => [
        'points' => array('43.857497, -79.590519', '43.839760, -79.586427', '43.834734, -79.609557', '43.852433, -79.614191'),
        'strokeColor' => '#7CFC00'
    ],
    54 => [
        'points' => array('43.852325, -79.614577', '43.834370, -79.610619', '43.829811, -79.631068', '43.848672, -79.635805'),
        'strokeColor' => '#0000FF'
    ],


    53 => [
        'points' => array('43.829447, -79.631100', '43.810907, -79.628675', '43.815874, -79.606159', '43.833615, -79.611459'),
        'strokeColor' => '#FF0000'
    ],
    46 => [
        'points' => array('43.834010, -79.609839', '43.815924, -79.605848', '43.821213, -79.582323', '43.839592, -79.586394'),
        'strokeColor' => '#BA55D3'
    ],
    39 => [
        'points' => array('43.839650, -79.586163', '43.821352, -79.581980', '43.826309, -79.556521', '43.844590, -79.560835'),
        'strokeColor' => '#FF0000'
    ],
    32 => [
        'points' => array('43.844691, -79.560341', '43.826309, -79.555995', '43.831031, -79.533070', '43.849198, -79.536898'),
        'strokeColor' => '#0000FF'
    ],
    25 => [
        'points' => array('43.849407, -79.536362', '43.831163, -79.532480', '43.836605, -79.508431', '43.854708, -79.512494'),
        'strokeColor' => '#FFA500'
    ],
    18 => [
        'points' => array('43.854762, -79.512118', '43.836737, -79.507830', '43.842703, -79.483272', '43.860964, -79.487607'),
        'strokeColor' => '#FFFF00'
    ],
    11 => [
        'points' => array('43.861049, -79.487221', '43.842817, -79.482976', '43.847854, -79.459040', '43.865724, -79.462952'),
        'strokeColor' => '#FFA500'
    ],

    10 => [
        'points' => array('43.847444, -79.458933', '43.829888, -79.454692', '43.824392, -79.478328', '43.842469, -79.482858'),
        'strokeColor' => '#BA55D3'
    ],
    17 => [
        'points' => array('43.842376, -79.483201', '43.824284, -79.478918', '43.818742, -79.503798', '43.836327, -79.507766'),
        'strokeColor' => '#7CFC00'
    ],
    24 => [
        'points' => array('43.836203, -79.508313', '43.818479, -79.504646', '43.812704, -79.528303', '43.830706, -79.532373'),
        'strokeColor' => '#BA55D3'
    ],
    31 => [
        'points' => array('43.830598, -79.532931', '43.812611, -79.528636', '43.808096, -79.551700', '43.825984, -79.555952'),
        'strokeColor' => '#7CFC00'
    ],
    38 => [
        'points' => array('43.825914, -79.556499', '43.808050, -79.552161', '43.802684, -79.577693', '43.820988, -79.581883'),
        'strokeColor' => '#FFA500'
    ],
    45 => [
        'points' => array('43.820934, -79.582237', '43.802630, -79.577897', '43.797992, -79.601447', '43.815576, -79.605709'),
        'strokeColor' => '#FFFF00'
    ],
    52 => [
        'points' => array('43.815506, -79.606009', '43.797868, -79.603228', '43.791680, -79.625941', '43.810419, -79.628664'),
        'strokeColor' => '#FFA500'
    ],

    51 => [
        'points' => array('43.791285, -79.625855', '43.796575, -79.602767', '43.778757, -79.597578', '43.773401, -79.621315'),
        'strokeColor' => '#BA55D3'
    ],
    44 => [
        'points' => array('43.797140, -79.600696', '43.778927, -79.597160', '43.784295, -79.573406', '43.802336, -79.577843'),
        'strokeColor' => '#7CFC00'
    ],
    37 => [
        'points' => array('43.802382, -79.577510', '43.784388, -79.572912', '43.789519, -79.547792', '43.807694, -79.552097'),
        'strokeColor' => '#BA55D3'
    ],
    30 => [
        'points' => array('43.807787, -79.551582', '43.789658, -79.547245', '43.794289, -79.524811', '43.812232, -79.528561'),
        'strokeColor' => '#FF0000'
    ],
    23 => [
        'points' => array('43.812325, -79.528218', '43.794390, -79.524339', '43.800500, -79.499695', '43.818200, -79.504313'),
        'strokeColor' => '#FFFF00'
    ],
    16 => [
        'points' => array('43.818471, -79.503723', '43.800608, -79.499266', '43.805796, -79.474890', '43.823843, -79.478811'),
        'strokeColor' => '#FF0000'
    ],
    9 => [
        'points' => array('43.823928, -79.478296', '43.805881, -79.474354', '43.811007, -79.450203', '43.828928, -79.454477'),
        'strokeColor' => '#FFFF00'
    ],
    2 => [
        'points' => array('43.828959, -79.453855', '43.811084, -79.449688', '43.816395, -79.424754', '43.834211, -79.429007'),
        'strokeColor' => '#0000FF'
    ],

    1 => [
        'points' => array('43.816194, -79.424695', '43.798134, -79.420235', '43.792651, -79.445548', '43.810759, -79.449613'),
        'strokeColor' => '#FF0000'
    ],
    8 => [
        'points' => array('43.810623, -79.450337', '43.792550, -79.446085', '43.787508, -79.469903', '43.805517, -79.474311'),
        'strokeColor' => '#7CFC00'
    ],
    15 => [
        'points' => array('43.805409, -79.474837', '43.787392, -79.470397', '43.781738, -79.494344', '43.800167, -79.499159'),
        'strokeColor' => '#0000FF'
    ],
    22 => [
        'points' => array('43.800043, -79.499588', '43.781637, -79.494784', '43.775672, -79.521467', '43.793933, -79.524242'),
        'strokeColor' => '#BA55D3'
    ],
    29 => [
        'points' => array('43.793832, -79.524671', '43.775625, -79.522111', '43.771178, -79.543247', '43.789217, -79.547202'),
        'strokeColor' => '#FFA500'
    ],
    36 => [
        'points' => array('43.789132, -79.547696', '43.771070, -79.543880', '43.766197, -79.567752', '43.784001, -79.572837'),
        'strokeColor' => '#FFFF00'
    ],
    43 => [
        'points' => array('43.783900, -79.573288', '43.765848, -79.569383', '43.760610, -79.591924', '43.778540, -79.597074'),
        'strokeColor' => '#0000FF'
    ],
    50 => [
        'points' => array('43.778432, -79.597385', '43.760486, -79.592621', '43.755658, -79.614014', '43.772897, -79.621251'),
        'strokeColor' => '#FF0000'
    ]
];

$config['gps_enabled'] = TRUE;
$config['processing'] = TRUE;
$config['tax_name'] = 'HST';
$config['tax_rate'] = 1.13;
$config['tax_perc'] = isset($config['tax_rate']) && $config['tax_rate'] ? $config['tax_rate'] * 100 - 100 : 0;
$config['tax_string'] = $config['tax_perc'] ? $config['tax_name'] . ' ' . $config['tax_perc'] . '%' : NULL;

$config['company_dir'] = 'treedoctors';
$config['company_name_short'] = 'Tree Doctors';
$config['company_name_long'] = 'Tree Doctors Inc.';
$config['company_header_logo'] = '/assets/' . $config['company_dir'] . '/img/logo_header.png';
$config['company_header_logo_styles'] = '';
$config['company_header_logo_string'] = $config['company_name_short'];
$config['company_header_pdf_logo_styles'] = '';
$config['company_header_pdf_small_logo_styles'] = '';
$config['company_pdf_terms_conditions'] = 'includes/terms_conditions';
$config['company_pdf_payment_terms'] = 'includes/payment_terms';
$config['payment_logo_styles'] = '';

$config['payment_default'] = 'bambora';
$config['payment_currency'] = 'CAD';
$config['payment_brands'] = ['visa','mastercard']; // Can be 'amex', 'diners', 'discover', 'jcb', 'mastercard', 'visa', or 'maestro'

$config['payment_methods'][1] = 'Cash';
if($config['processing']) {
    $config['payment_methods'][2] = 'Credit Card';
    $config['default_cc'] = 2;
}
$config['payment_methods'][3] = 'Cheque';
$config['payment_methods'][4] = 'Debit Card';
$config['payment_methods'][5] = 'E-Transfer';
$config['qa_types'][1] = 'Suggestion';
$config['qa_types'][2] = 'Complaint';
$config['qa_types'][3] = 'Compliment';
/********************************Company Settings End***************************************/



/***********************************Contact Info********************************************/
$config['default_email_from'] = 'Team Tree Doctors';
$config['default_email_from_second'] = 'Tree Doctors Team';

$config['my_email'] = 'yl@treedoctors.ca';
$config['promotion_links'][0]['link'] = 'https://www.yelp.ca/biz/tree-doctors-inc-etobicoke';
$config['promotion_links'][0]['name'] = 'yelp';
$config['promotion_links'][1]['link'] = 'https://homestars.com/companies/2792317-tree-doctors';
$config['promotion_links'][1]['name'] = 'Homestars';
$config['social_links']['Twitter'] = 'https://twitter.com/treedoctorsca';
$config['social_links']['Facebook'] = 'https://www.facebook.com/TreeDoctorsInc';
$config['social_links']['Google+'] = 'https://plus.google.com/112661249164043860079';

$config['seo_email'] = 'SEO@TreeDoctors.ca';
/*********************************Contact Info End*****************************************/


/*************************************Links************************************************/
$config['confirm_link'] = 'http://confirm.treedoctors.ca/';
$config['like_link'] = 'http://like.treedoctors.ca/';
$config['mailgun_event'] = 'treedoctors.ca/events';
$config['mailgun_msg'] = 'treedoctors.ca/messages';
$config['payment_link'] = 'https://payments.treedoctors.ca/';
$config['unsub_link'] = 'http://unsubscribe.treedoctors.ca/';
$config['unsubscribe_link'] = 'http://unsubscribe.treedoctors.ca/unsubscribe/unsubscribeAll/';

/*************************************Links End********************************************/


/*************************************Twilio Settings*************************************/
$config['messenger'] = TRUE;
$config['phone'] = TRUE;
$config['enable_twilio'] = TRUE;
$config['hard_from_number'] = 'sip:treedoctors@treedoctorsoffice.sip.us1.twilio.com';
$config['onlineActivitySid'] = 'WAfc57c478bd7cea19883d8908c85b0f6b';
$config['busyActivitySid'] = 'WAc34bf63afbabe02fa3aba16bcec1bde4';
$config['reservedActivitySid'] = 'WAcee551aab46ac59139a9c9b06059465c';
$config['wrapUpActivitySid'] = 'WA8c2811c172735411234161750938690a';
$config['offlineActivitySid'] = 'WAb59015c8ffd0c47bb1f812a8c06c38d6';

$config['accountSid'] = 'ACba9a5eeb8b45a12e3973bd16e6ae83f2';
$config['authToken'] = '59cd6e4b9e26182c4fc30956b950bc5f';
$config['workspaceSid'] = 'WSd5ddf64bb22aa165abac6c6434764dec';
$config['taskQueueSid'] = 'WQ4634bbda790aa3a5e589ac482f7229aa';
$config['appSid'] = 'AP1b1806bca60981e676ba7c77a9636772';
$config['workflowSid'] = 'WWade680760e2f16066950ea0f956a99c9';
$config['myNumber'] = '14162018000';
$config['twilioNumber'] = '14162018000';
$config['wsClient'] = 'https://treedoctors.arbostar.com:8895';

$config['areaCode'] = '+1';
$config['defaultArea'] = 'CA';
$config['smsProvider'] = 'twilio/sms';
$config['smsLimitMonth'] = 1000;
/*********************************End Twilio Settings*************************************/
?>