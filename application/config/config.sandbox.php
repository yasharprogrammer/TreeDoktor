<?php  if (!defined('BASEPATH')) exit('No direct script access allowed');
$config['profiler'] = TRUE;
/*
|--------------------------------------------------------------------------
| Base Site URL
|--------------------------------------------------------------------------
|
| URL to your CodeIgniter root. Typically this will be your base URL,
| WITH a trailing slash:
|
|	http://example.com/
|
| If this is not set then CodeIgniter will guess the protocol, domain and
| path to your installation.
|
*/
$segments = array();
$config['base_url'] = "";
if(isset($_SERVER['REQUEST_URI']))
	$segments = explode('/', ltrim($_SERVER['REQUEST_URI'], '/'));

$protocol = 'http';
if(isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on')
	$protocol = 'https';

if(isset($_SERVER['HTTP_HOST'])) {
	$config['base_url'] = $protocol . "://" . $_SERVER['HTTP_HOST'] . "/";
}
else {
	$config['base_url'] = "https://sandbox.arbostar.com/";
}
/*
|--------------------------------------------------------------------------
| Index File
|--------------------------------------------------------------------------
|
| Typically this will be your index.php file, unless you've renamed it to
| something else. If you are using mod_rewrite to remove the page set this
| variable so that it is blank.
|
*/
$config['index_page'] = '';
/*
|--------------------------------------------------------------------------
| URI PROTOCOL
|--------------------------------------------------------------------------
|
| This item determines which server global should be used to retrieve the
| URI string.  The default setting of 'AUTO' works for most servers.
| If your links do not seem to work, try one of the other delicious flavors:
|
| 'AUTO'			Default - auto detects
| 'PATH_INFO'		Uses the PATH_INFO
| 'QUERY_STRING'	Uses the QUERY_STRING
| 'REQUEST_URI'		Uses the REQUEST_URI
| 'ORIG_PATH_INFO'	Uses the ORIG_PATH_INFO
|
*/
$config['uri_protocol'] = 'AUTO';

/*
|--------------------------------------------------------------------------
| URL suffix
|--------------------------------------------------------------------------
|
| This option allows you to add a suffix to all URLs generated by CodeIgniter.
| For more information please see the user guide:
|
| http://codeigniter.com/user_guide/general/urls.html
*/

$config['url_suffix'] = '';

/*
|--------------------------------------------------------------------------
| Default Language
|--------------------------------------------------------------------------
|
| This determines which set of language files should be used. Make sure
| there is an available translation if you intend to use something other
| than english.
|
*/
$config['language'] = 'english';

/*
|--------------------------------------------------------------------------
| Default Character Set
|--------------------------------------------------------------------------
|
| This determines which character set is used by default in various methods
| that require a character set to be provided.
|
*/
$config['charset'] = 'UTF-8';

/*
|--------------------------------------------------------------------------
| Enable/Disable System Hooks
|--------------------------------------------------------------------------
|
| If you would like to use the 'hooks' feature you must enable it by
| setting this variable to TRUE (boolean).  See the user guide for details.
|
*/
$config['enable_hooks'] = FALSE;


/*
|--------------------------------------------------------------------------
| Class Extension Prefix
|--------------------------------------------------------------------------
|
| This item allows you to set the filename/classname prefix when extending
| native libraries.  For more information please see the user guide:
|
| http://codeigniter.com/user_guide/general/core_classes.html
| http://codeigniter.com/user_guide/general/creating_libraries.html
|
*/
$config['subclass_prefix'] = 'MY_';


/*
|--------------------------------------------------------------------------
| Allowed URL Characters
|--------------------------------------------------------------------------
|
| This lets you specify with a regular expression which characters are permitted
| within your URLs.  When someone tries to submit a URL with disallowed
| characters they will get a warning message.
|
| As a security measure you are STRONGLY encouraged to restrict URLs to
| as few characters as possible.  By default only these are allowed: a-z 0-9~%.:_-
|
| Leave blank to allow all characters -- but only if you are insane.
|
| DO NOT CHANGE THIS UNLESS YOU FULLY UNDERSTAND THE REPERCUSSIONS!!
|
*/
$config['permitted_uri_chars'] = 'a-z 0-9~%.:_\-?=(),+';


/*
|--------------------------------------------------------------------------
| Enable Query Strings
|--------------------------------------------------------------------------
|
| By default CodeIgniter uses search-engine friendly segment based URLs:
| example.com/who/what/where/
|
| By default CodeIgniter enables access to the $_GET array.  If for some
| reason you would like to disable it, set 'allow_get_array' to FALSE.
|
| You can optionally enable standard query string based URLs:
| example.com?who=me&what=something&where=here
|
| Options are: TRUE or FALSE (boolean)
|
| The other items let you set the query string 'words' that will
| invoke your controllers and its functions:
| example.com/index.php?c=controller&m=function
|
| Please note that some of the helpers won't work as expected when
| this feature is enabled, since CodeIgniter is designed primarily to
| use segment based URLs.
|
*/
$config['allow_get_array'] = TRUE;
$config['enable_query_strings'] = FALSE;
$config['controller_trigger'] = 'c';
$config['function_trigger'] = 'm';
$config['directory_trigger'] = 'd'; // experimental not currently in use

/*
|--------------------------------------------------------------------------
| Error Logging Threshold
|--------------------------------------------------------------------------
|
| If you have enabled error logging, you can set an error threshold to
| determine what gets logged. Threshold options are:
| You can enable error logging by setting a threshold over zero. The
| threshold determines what gets logged. Threshold options are:
|
|	0 = Disables logging, Error logging TURNED OFF
|	1 = Error Messages (including PHP errors)
|	2 = Debug Messages
|	3 = Informational Messages
|	4 = All Messages
|
| For a live site you'll usually only enable Errors (1) to be logged otherwise
| your log files will fill up very fast.
|
*/
$config['log_threshold'] = 0;

/*
|--------------------------------------------------------------------------
| Error Logging Directory Path
|--------------------------------------------------------------------------
|
| Leave this BLANK unless you would like to set something other than the default
| application/logs/ folder. Use a full server path with trailing slash.
|
*/
$config['log_path'] = '';

/*
|--------------------------------------------------------------------------
| Date Format for Logs
|--------------------------------------------------------------------------
|
| Each item that is logged has an associated date. You can use PHP date
| codes to set your own date formatting
|
*/
$config['log_date_format'] = 'Y-m-d H:i:s';

/*
|--------------------------------------------------------------------------
| Cache Directory Path
|--------------------------------------------------------------------------
|
| Leave this BLANK unless you would like to set something other than the default
| system/cache/ folder.  Use a full server path with trailing slash.
|
*/
$config['cache_path'] = '';

/*
|--------------------------------------------------------------------------
| Encryption Key
|--------------------------------------------------------------------------
|
| If you use the Encryption class or the Session class you
| MUST set an encryption key.  See the user guide for info.
|
*/
$config['encryption_key'] = 'gister';

/*
|--------------------------------------------------------------------------
| Session Variables
|--------------------------------------------------------------------------
|
| 'sess_cookie_name'		= the name you want for the cookie
| 'sess_expiration'			= the number of SECONDS you want the session to last.
|   by default sessions last 7200 seconds (two hours).  Set to zero for no expiration.
| 'sess_expire_on_close'	= Whether to cause the session to expire automatically
|   when the browser window is closed
| 'sess_encrypt_cookie'		= Whether to encrypt the cookie
| 'sess_use_database'		= Whether to save the session data to a database
| 'sess_table_name'			= The name of the session database table
| 'sess_match_ip'			= Whether to match the user's IP address when reading the session data
| 'sess_match_useragent'	= Whether to match the User Agent when reading the session data
| 'sess_time_to_update'		= how many seconds between CI refreshing Session Information
|
*/
$config['sess_cookie_name'] = 'sandbox_session';
$config['sess_expiration'] = 18000;
$config['sess_expire_on_close'] = TRUE;
$config['sess_encrypt_cookie'] = TRUE;
$config['sess_use_database'] = FALSE;
$config['sess_table_name'] = 'ci_sessions';
$config['sess_match_ip'] = FALSE;
$config['sess_match_useragent'] = TRUE;
$config['sess_time_to_update'] = 300;

/*
|--------------------------------------------------------------------------
| Cookie Related Variables
|--------------------------------------------------------------------------
|
| 'cookie_prefix' = Set a prefix if you need to avoid collisions
| 'cookie_domain' = Set to .your-domain.com for site-wide cookies
| 'cookie_path'   =  Typically will be a forward slash
| 'cookie_secure' =  Cookies will only be set if a secure HTTPS connection exists.
|
*/
$config['cookie_prefix'] = "";
$config['cookie_domain'] = "";
$config['cookie_path'] = "/";
$config['cookie_secure'] = FALSE;

/*
|--------------------------------------------------------------------------
| Global XSS Filtering
|--------------------------------------------------------------------------
|
| Determines whether the XSS filter is always active when GET, POST or
| COOKIE data is encountered
|
*/
$config['global_xss_filtering'] = TRUE;
/*
|--------------------------------------------------------------------------
| Cross Site Request Forgery
|--------------------------------------------------------------------------
| Enables a CSRF cookie token to be set. When set to TRUE, token will be
| checked on a submitted form. If you are accepting user data, it is strongly
| recommended CSRF protection be enabled.
|
| 'csrf_token_name' = The token name
| 'csrf_cookie_name' = The cookie name
| 'csrf_expire' = The number in seconds the token should expire.
*/
$config['csrf_protection'] = FALSE;
$config['csrf_token_name'] = 'csrf_test_name';
$config['csrf_cookie_name'] = 'csrf_cookie_name';
$config['csrf_expire'] = 7200;

/*
|--------------------------------------------------------------------------
| Output Compression
|--------------------------------------------------------------------------
|
| Enables Gzip output compression for faster page loads.  When enabled,
| the output class will test whether your server supports Gzip.
| Even if it does, however, not all browsers support compression
| so enable only if you are reasonably sure your visitors can handle it.
|
| VERY IMPORTANT:  If you are getting a blank page when compression is enabled it
| means you are prematurely outputting something to your browser. It could
| even be a line of whitespace at the end of one of your scripts.  For
| compression to work, nothing can be sent before the output buffer is called
| by the output class.  Do not 'echo' any values with compression enabled.
|
*/
$config['compress_output'] = FALSE;

/*
|--------------------------------------------------------------------------
| Master Time Reference
|--------------------------------------------------------------------------
|
| Options are 'local' or 'gmt'.  This pref tells the system whether to use
| your server's local time as the master 'now' reference, or convert it to
| GMT.  See the 'date helper' page of the user guide for information
| regarding date handling.
|
*/
$config['time_reference'] = 'gmt';


/*
|--------------------------------------------------------------------------
| Rewrite PHP Short Tags
|--------------------------------------------------------------------------
|
| If your PHP installation does not have short tag support enabled CI
| can rewrite the tags on-the-fly, enabling you to utilize that syntax
| in your view files.  Options are TRUE or FALSE (boolean)
|
*/
$config['rewrite_short_tags'] = FALSE;


/*
|--------------------------------------------------------------------------
| Reverse Proxy IPs
|--------------------------------------------------------------------------
|
| If your server is behind a reverse proxy, you must whitelist the proxy IP
| addresses from which CodeIgniter should trust the HTTP_X_FORWARDED_FOR
| header in order to properly identify the visitor's IP address.
| Comma-delimited, e.g. '10.0.1.200,10.0.1.201'
|
*/
$config['proxy_ips'] = '';

$config['global_xss_filtering_disabled'] = array('administration/ajax_save_template', 'clients/ajax_send_email');

/*
|--------------------------------------------------------------------------
| Google Service Account (Gmail)
|--------------------------------------------------------------------------
|
|
|
|
 */
$config['service_email_address'] = '729138097020-kd8mmg4ahah5u3bnqnefrcjo2v3hro6j@developer.gserviceaccount.com';
$config['service_cert_path'] = 'uploads/treedoctors-c6f443f9efc0.p12';
$config['account_email_address'] = 'info@arbostar.com';

/* Added into db config */
$config['office_address'] = '2201-250 Yonge Street';
$config['office_region'] = '';  
$config['office_city'] = 'Toronto';
$config['office_state'] = 'Ontario';
$config['office_zip'] = 'M5G 1B1';
$config['office_country'] = 'Canada';
$config['office_description'] = '';
/* Added into db config */

$config['office_address_map'] = '2201-250+Yonge+Street+Toronto+ON+M5G+1B1';
$config['office_phone'] = '+18449890844';
$config['office_phone_mask'] = '(844) 989-0844';
$config['office_fax'] = '647.435.3439';
$config['company_site'] = ''; //'https://treedoctors.ca';
$config['company_site_http'] = ''; // 'http://treedoctors.ca';
$config['company_site_name'] = ''; //'treedoctors.ca';
$config['company_site_name_upper'] = ''; //'TreeDoctors.ca';

$config['footer_pdf_address'] = '<span class="green">ADDRESS: </span>' . $config['office_address'] . ' ' . $config['office_city'] . ', ' . $config['office_state'] . ' ' . $config['office_zip'] . ' <span class="green">OFFICE: </span>' . $config['office_phone_mask'] . ' <span class="green">WEB: </span> ' . $config['company_site_name_upper'];
$config['per_page_notes'] = 200;

$config['smtp_domains'] = ['hotmail.com', 'live.com', 'live.ca', 'msn.com', 'live.ru', 'outlook.com'];
$config['smtp_mail']['protocol']	= 'smtp';
$config['smtp_mail']['mailtype']	= 'html';
$config['smtp_mail']['smtp_host']	= 'ssl://smtp.mailgun.org';
$config['smtp_mail']['smtp_port'] 	= '465';
$config['smtp_mail']['smtp_user']	= 'info@arbostar.com';
$config['smtp_mail']['smtp_pass']	= 'dc3fc61c74cb51cbd69d3f3b7d80c766-9c988ee3-4a9e8f33';
$config['gmaps_key'] = 'AIzaSyDJgAJg7KOCgq1V9yiCu0OutofbBNbsvFQ'; //NEW DV 'AIzaSyC27mDdTvOzlga3ZDEoqOfaOeIGgMi-j7Y'; NEW DV\\ //'AIzaSyAwMbzxEHnKw2frNAexNCbUd_Zp1Osy2ME';//(date('H') < '13') ? 'AIzaSyAwMbzxEHnKw2frNAexNCbUd_Zp1Osy2ME' : 'AIzaSyB8R2MPS7Wk_VTIw-L6eMl2LA5WFtH8Vcc'; //'AIzaSyBDUPTmUYuYnv9r8d6-TXanSefGZclfKTw';

$config['refferenced_by'] = [
	'no_info_provided' => 'No Info Provided',
	'google_search' => 'Google Search',
	'yellow_pages' => 'Yellow Pages',
	'facebook' => 'Facebook',
	'bing' => 'Bing',
	'homestars' => 'Homestars',
	'houzz' => 'Houzz',
	'kijiji' => 'Kijiji',
	'craigslist' => 'Craigslist',
	'the_guardian' => 'The Guardian, Toronto.com',
	'print' => 'Print, Flyers, etc',
	'tree_fellers' => 'Tree Fellers',
	'office_sign' => 'Office Sign',
	'calling_previous_clients' => 'Calling Previous Clients',
	'arborist_reporter' => 'Arborist Reporter',
	'existing_client' => 'Existing Client',
	'vehicle_sign' => 'Vehicle Sign',
	'friend_or_neighbor' => 'Friend Or Neighbor',
	'client' => 'Client',
	'user' => 'Employee',
	'other' => 'Other',
];

$config['followup_modules'] = [
	'leads' => [
		'name' => 'Leads',
		'number' => 1,
		'id_field_name' => 'lead_id',
		'no_field_name' => 'lead_no',
		'action_name' => 'edit',
		'status_field_name' => 'lead_status_id',
		'reasons' => [],
		'statuses' => [],
	],
	'estimates' => [
		'name' => 'Estimates',
		'number' => 2,
		'id_field_name' => 'estimate_id',
		'no_field_name' => 'estimate_no',
		'action_name' => 'profile',
		'status_field_name' => 'status',
		'reasons' => [],
		'statuses' => [],
	],
	'invoices' => [
		'name' => 'Invoices',
		'number' => 3,
		'id_field_name' => 'id',
		'no_field_name' => 'invoice_no',
		'action_name' => 'profile',
		'status_field_name' => 'in_status',
		'reasons' => [],
		'statuses' => [],
	],
	'schedule' => [
		'name' => 'Schedule Event',
		'number' => 4,
		'id_field_name' => 'id',
		'no_field_name' => 'workorder_no',
		'action_name' => 'profile',
		'status_field_name' => 'wo_status',
		'reasons' => [],
		'statuses' => [
			'7' => 'Scheduled - Confirmed',
			'48' => 'Scheduled - Confirmed today only'
			/*'60' => 'PHC Spring 2019',
			'59' => 'Need to Get Locates',
			'49' => 'Confirmed for approval',
			'48' => 'Scheduled - Confirmed today only',
			'1' => 'Confirmed',
			'7' => 'Scheduled - Confirmed',
			'6' => 'Scheduled - Pending',
			'8' => 'Stump Grinding',
			'46' => 'Firewood delivery',
			'55' => 'Arborist consultation',
			'58' => 'Arborist Supervision',
			'45' => 'Xmass Lights Instalation',
			'41' => 'Confirmed EMERGENCY',
			'44' => 'TPZ',
			'3' => 'C-AR in Progress',
			'39' => 'AR in Progress',
			'5' => 'Exemption',
			'2' => 'City Permits - Exemptions',
			'4' => 'City Permits',
			'11' => 'Unfinished',
			'10' => 'Wood Pickup',
			'13' => 'Complains - Tree work',
			'12' => 'Complains - Damages',
			'57' => 'Complains - Other',
			'15' => 'On hold',
			'16' => 'Dormant Oil',
			'54' => 'ImaJet',
			'17' => 'Fertilizing Fall 2018',
			'50' => 'Planting Fall 2018',
			'0' => 'Finished',
			'14' => 'Repair',
			'51' => 'Acecap',
			'37' => 'Locates - Pending',
			'36' => 'Blue Bird Stumper'*/
		],
	],
	'client_tasks' => [
		'name' => 'Client Tasks',
		'number' => 5,
		'id_field_name' => 'task_id',
		'no_field_name' => 'task',
		'action_name' => '',
		'status_field_name' => 'task_status',
		'reasons' => [],
		'statuses' => [
			'2' => 'Construction Arborist Report',
			'3' => 'Regular Arborist Report',
			'4' => 'Exemption',
			'5' => 'Payment Follow Up Visit',
			'6' => 'Repair Assessment',
			'7' => 'Meeting with a client',
			'8' => 'Secondary visit.',
			'9' => 'Follow up call',
			'10' => 'Office Related Task',
			'11' => 'Arborist Supervision'
			/*'60' => 'PHC Spring 2019',
			'59' => 'Need to Get Locates',
			'49' => 'Confirmed for approval',
			'48' => 'Scheduled - Confirmed today only',
			'1' => 'Confirmed',
			'7' => 'Scheduled - Confirmed',
			'6' => 'Scheduled - Pending',
			'8' => 'Stump Grinding',
			'46' => 'Firewood delivery',
			'55' => 'Arborist consultation',
			'58' => 'Arborist Supervision',
			'45' => 'Xmass Lights Instalation',
			'41' => 'Confirmed EMERGENCY',
			'44' => 'TPZ',
			'3' => 'C-AR in Progress',
			'39' => 'AR in Progress',
			'5' => 'Exemption',
			'2' => 'City Permits - Exemptions',
			'4' => 'City Permits',
			'11' => 'Unfinished',
			'10' => 'Wood Pickup',
			'13' => 'Complains - Tree work',
			'12' => 'Complains - Damages',
			'57' => 'Complains - Other',
			'15' => 'On hold',
			'16' => 'Dormant Oil',
			'54' => 'ImaJet',
			'17' => 'Fertilizing Fall 2018',
			'50' => 'Planting Fall 2018',
			'0' => 'Finished',
			'14' => 'Repair',
			'51' => 'Acecap',
			'37' => 'Locates - Pending',
			'36' => 'Blue Bird Stumper'*/
		],
	],
	'employees' => [
		'name' => 'Employees',
		'number' => 5,
		'id_field_name' => '',
		'no_field_name' => '',
		'action_name' => '',
		'status_field_name' => '',
		'reasons' => [],
		'statuses' => [],
	],
	'users' => [
		'name' => 'Users',
		'number' => 6,
		'id_field_name' => '',
		'no_field_name' => '',
		'action_name' => '',
		'status_field_name' => '',
		'reasons' => [],
		'statuses' => [],
	],
	'equipment_items' => [
		'name' => 'Equipments',
		'number' => 7,
		'id_field_name' => 'field',
		'no_field_name' => '',
		'action_name' => '',
		'status_field_name' => '',
		'reasons' => [],
		'statuses' => [],
	],
];

$config['default_signature'] = '';
//$config['service_email_address'] = '729138097020-kd8mmg4ahah5u3bnqnefrcjo2v3hro6j@developer.gserviceaccount.com';
//$config['service_cert_path'] = 'uploads/treedoctors-c6f443f9efc0.p12';
//$config['account_email_address'] = 'info@treedoctors.ca';

// Auto tax for US company
$config['auto_tax_url'] = 'https://trial.serviceobjects.com/ft/web.svc/JSON/GetTaxInfoByCityCountyState?';
$config['auto_tax_key'] = 'WS19-CKB3-JVP1';
$config['auto_tax_type'] = 'sales';

/* End of file config.php */
/* Location: ./application/config/config.php */
