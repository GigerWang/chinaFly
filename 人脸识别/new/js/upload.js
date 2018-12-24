accessid= 'LTAIPAxYUUjTkFBV';
accesskey= '5ELWo0iJvDFeoiZqOvupsqAseCLXmr';
host = 'http://ossh5.oss-cn-qingdao.aliyuncs.com';

g_dirname = 'Demo/H5Demo/FaceplusplusMerge/upload/'
g_object_name = ''
g_object_name_type = 'random_name'
now = timestamp = Date.parse(new Date()) / 1000; 

var policyText = {
    "expiration": "2020-01-01T12:00:00.000Z", //璁剧疆璇olicy鐨勫け鏁堟椂闂达紝瓒呰繃杩欎釜澶辨晥鏃堕棿涔嬪悗锛屽氨娌℃湁鍔炴硶閫氳繃杩欎釜policy涓婁紶鏂囦欢浜�
    "conditions": [
    ["content-length-range", 0, 1048576000] // 璁剧疆涓婁紶鏂囦欢鐨勫ぇ灏忛檺鍒�
    ]
};

var policyBase64 = Base64.encode(JSON.stringify(policyText))
message = policyBase64
var bytes = Crypto.HMAC(Crypto.SHA1, message, accesskey, { asBytes: true }) ;
var signature = Crypto.util.bytesToBase64(bytes);

function random_string(len) {
銆€銆€len = len || 32;
銆€銆€var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';   
銆€銆€var maxPos = chars.length;
銆€銆€var pwd = '';
銆€銆€for (i = 0; i < len; i++) {
    銆€銆€pwd += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}

function get_suffix(filename) {
    pos = filename.lastIndexOf('.')
    suffix = ''
    if (pos != -1) {
        suffix = filename.substring(pos)
    }
    return suffix;
}

function calculate_object_name(filename) {
    suffix = get_suffix(filename)
    g_object_name = g_dirname + random_string(10) + suffix

    return ''
}

function set_upload_param(up, filename, ret)
{
    g_object_name = g_dirname;
    if (filename != '') {
        suffix = get_suffix(filename)
        calculate_object_name(filename)
    }
    new_multipart_params = {
        'key' : g_object_name,
        'policy': policyBase64,
        'OSSAccessKeyId': accessid, 
        'success_action_status' : '200', //璁╂湇鍔＄杩斿洖200,涓嶇劧锛岄粯璁や細杩斿洖204
        'signature': signature,
    };

    up.setOption({
        'url': host,
        'multipart_params': new_multipart_params
    });

    up.start();
}