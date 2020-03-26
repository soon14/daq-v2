/** * 数据元模版列表获取 *分页数据 */Mock.mock(wwwroot+'/dataGovernance/dataElementModel',function(options) {    var result = {        total: 40,        rows:[]    };    var offsetNum = getPostParam(options).offset;    for(var i = 0 ; i < 20  ; i++){        result.rows.push(Mock.mock({            "id":/[a-z][A-Z][0-9]/,            "modelName":"数据元模版"+(offsetNum+i),            "level":/gb|shb|db/,            "modelDesc":"数据元模版"+(offsetNum+i)+"详细描述",            "createTime":Mock.Random.datetime(),            "modifyTime":Mock.Random.datetime()        }));    };    return result;});/** * 数据元列表获取 *分页数据 */Mock.mock(wwwroot+'/dataGovernance/dataElement',function(options) {    var result = {        code:"code_200",        msg:"查询成功！",        data:[]    };    var level = getPostParam(options).level;    for(var i = 0 ; i < 100 ; i++){        result.data.push(Mock.mock({            "id":/[0-9]/,            "dataElementName":"数据元"+i,            "dataElementCode":/[a-z][A-Z]{5,8}/,            "dataFormat":/n3...5|n3.2|str18|boolen|yyyy-MM-dd/,            "valueDesc":"数据源"+i+"的值域"        }));    };    return result;});//根据ID获取数据元信息Mock.mock(RegExp(wwwroot + '/dataGovernance/dataElementModel'+ ".*"),"get",function() {    return {        code:"code_200",        msg:"查询成功！",        data:Mock.mock({            "id":"123456",            "modelName":"测试数据元模版",            "level":/gb|shb|db/,            "modelDesc":"数据元模版的详细描述信息",            "createTime":Mock.Random.datetime(),            "modifyTime":Mock.Random.datetime(),            "dataElements":[{                "id":"1",                "dataElementName":"数据元1",                "dataElementCode":/[a-z][A-Z]{5,8}/,                "dataFormat":/n3...5|n3.2|str18|boolen|yyyy-MM-dd/,                "valueDesc":"数据元的值域"            },{                "id":"2",                "dataElementName":"数据元2",                "dataElementCode":/[a-z][A-Z]{5,8}/,                "dataFormat":/n3...5|n3.2|str18|boolen|yyyy-MM-dd/,                "valueDesc":"数据元的值域"            }]        })    };});/** * 元模型获取，获取所有的元模型 */Mock.mock(wwwroot+'/dataGovernance/metamodel','get',function() {    return {        code:"code_200",        msg:"查询成功！",        data:[{            id:"1",            metamodelName:"string",            dataType:"string"        },{            id:"2",            metamodelName:"float",            dataType:"float"        },{            id:"3",            metamodelName:"boolen",            dataType:"boolen"        },{            id:"4",            metamodelName:"number",            dataType:"number"        },{            id:"5",            metamodelName:"double",            dataType:"double"        },{            id:"6",            metamodelName:"time",            dataType:"time"        },{            id:"7",            metamodelName:"date",            dataType:"date"        },{            id:"8",            metamodelName:"date-time",            dataType:"date-time"        }]    };});//数据元级别字典Mock.mock(wwwroot + '/base/api/dictionary/data_element_level',"get",function() {    return {        code:"code_200",        msg:"查询成功！",        data:[{            dicName:"国家标准",            dicCode:"gb"        },{            dicName:"省标准",            dicCode:"shb"        },{            dicName:"地市标准",            dicCode:"db"        }]    };});