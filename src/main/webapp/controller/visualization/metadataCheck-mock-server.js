/**
 * 数据分页获取
 *分页数据
 */
Mock.mock(wwwroot+'/dataGovernance/metadata',function(options) {
    var result = {
        total: 80,
        rows:[]
    };
    var offsetNum = getPostParam(options).offset;
    for(var i = 0 ; i < 20 ; i++){
        result.rows.push(Mock.mock({
            "id":/[a-z][A-Z][0-9]/,
            "metadataName":"元数据"+(offsetNum+i),
            "metaType":/daq|diy/,
            "version":/1|2|3|4/,
            "deptId":/^([12][0-9]|30|[1-9])$/,
            "tradeType":/1|2|3|4|5/,
            "alarm":Mock.Random.boolean(),
            "desc":"元数据"+(offsetNum+i)+"的描述信息",
            "createTime":Mock.Random.datetime(),
            "modifyTime":Mock.Random.datetime()
        }));
    };
    return result;
});

//根据ID获取数据源信息
Mock.mock(RegExp(wwwroot + '/dataGovernance/metadata'+ ".*"),"get",function() {
    return {
        code:"code_200",
        msg:"查询成功！",
        data:Mock.mock({
            "id":"12345",
            "metadataName":"元数据X",
            "metaType":/daq|diy/,
            "version":/1|2|3|4/,
            "alarm":Mock.Random.boolean(),
            "dataSource":"数据源1",
            "tableName":"table_test",
            "desc":"元数据X的描述信息",
            "level":"gb",
            "dataElementModel":"数据元模板1",
            "createTime":Mock.Random.datetime(),
            "modifyTime":Mock.Random.datetime(),
            "cols":[{
                "id":"1",
                "colName":"id",
                "colDesc":"标识",
                "colType":"string",
                "colLength":64,
                "isKey":"y",
                "mapingDataElement":"数据元1"
            },{
                "id":"1",
                "colName":"col_1",
                "colDesc":"字段1",
                "colType":"string",
                "colLength":64,
                "isKey":"n",
                "mapingDataElement":"数据元2"
            },{
                "id":"2",
                "colName":"col_2",
                "colDesc":"字段2",
                "colType":"string",
                "colLength":64,
                "isKey":"n",
                "mapingDataElement":"数据元3"
            }]
        })
    };
});

//获取元数据来源字典信息
Mock.mock(wwwroot + '/base/api/dictionary/metadataCheck',"get",function() {
    return {
        code:"code_200",
        msg:"查询成功！",
        data:[{
            dicName:"采集",
            dicCode:"daq"
        },{
            dicName:"自定义",
            dicCode:"diy"
        }]
    };
});

//获取领域分类字典信息
Mock.mock(wwwroot + '/base/api/dictionary/trade_type',"get",function() {
    return {
        code:"code_200",
        msg:"查询成功！",
        data:[{
            dicName:"民生",
            dicCode:"1"
        },{
            dicName:"航空航天",
            dicCode:"2"
        },{
            dicName:"军事",
            dicCode:"3"
        },{
            dicName:"食品",
            dicCode:"4"
        },{
            dicName:"医疗",
            dicCode:"5"
        }]
    };
});

/**
 * 数据源获取
 *分页数据
 */
Mock.mock(wwwroot+'/dataGovernance/dataSource',function(options) {
    var result = {
        code:"code_200",
        msg:"查询成功！",
        data:[]
    };
    for(var i = 0 ; i < 30 ; i++){
        result.data.push(Mock.mock({
            "id":/[a-z][A-Z][0-9]/,
            "dataSourceName":"数据源"+i,
            "dataBaseType":/mysql|oracle|sqlserver|mariadb/
        }));
    };
    return result;
});

/**
 * 组织信息获取
 *分页数据
 */
Mock.mock(wwwroot+'/basicManage/dept',function(options) {
    var result = {
        code:"code_200",
        msg:"查询成功！",
        data:[]
    };
    for(var i = 0 ; i < 30 ; i++){
        result.data.push(Mock.mock({
            "id":i+1,
            "deptName":"部门"+i
        }));
    };
    return result;
});

/**
 * 组织信息获取
 *分页数据
 */
Mock.mock(wwwroot+'/dataGovernance/dataSource/getTables',function(options) {
    var result = {
        code:"code_200",
        msg:"查询成功！",
        data:[]
    };
    for(var i = 0 ; i < 30 ; i++){
        result.data.push(Mock.mock({
            "tableName":"t_base_table_"+i,
            "tableDesc":"表"+i
        }));
    };
    return result;
});
/**
 * 组织信息获取
 *分页数据
 */
Mock.mock(wwwroot+'/dataGovernance/dataSource/getCols',function(options) {
    var result = {
        code:"code_200",
        msg:"查询成功！",
        data:[{
            "colName":"id",
            "colDesc":"主键标识",
            "colType":"string",
            "colLength":64,
            "isKey":"y"
        }]
    };
    for(var i = 1 ; i < 30 ; i++){
        result.data.push(Mock.mock({
            "colName":"col_"+i,
            "colDesc":"字段"+i,
            "colType":/string|number|data|data-time|boolen/,
            "colLength":64,
            "isKey":"n"
        }));
    };
    return result;
});

/**
 * 查询元模型集合
 */
Mock.mock(wwwroot+'/dataGovernance/metamodel',"get",function() {
    var result = {
        code:"code_200",
        msg:"查询成功！",
        data:[]
    };
    for(var i = 0 ; i < 8 ; i++){
        result.data.push(Mock.mock({
            "id":/[a-z][A-Z][0-9]/,
            "metamodelName":"元模型"+i,
            "dataType":/string|float|boolen|number|double|time|date-time|date/
        }));
    };
    return result;
});

//数据元级别字典
Mock.mock(wwwroot + '/base/api/dictionary/data_element_level',"get",function() {
    return {
        code:"code_200",
        msg:"查询成功！",
        data:[{
            dicName:"国家标准",
            dicCode:"gb"
        },{
            dicName:"省标准",
            dicCode:"shb"
        },{
            dicName:"地市标准",
            dicCode:"db"
        }]
    };
});

/**
 * 根据参数（数据元模版级别）查询数据元模版信息
 */
Mock.mock(wwwroot+'/dataGovernance/dataElementModel','get',function(options) {
    var result = {
        code:"code_200",
        msg:"查询成功！",
        data:[]
    };
    for(var i = 0 ; i < 20  ; i++){
        result.data.push(Mock.mock({
            "id":/[a-z][A-Z][0-9]/,
            "modelName":"数据元模版"+i,
            "level":"gb",
            "modelDesc":"数据元模版"+i+"详细描述",
            "createTime":Mock.Random.datetime(),
            "modifyTime":Mock.Random.datetime()
        }));
    };
    return result;
});

//根据ID获取数据元信息
Mock.mock(RegExp(wwwroot + '/dataGovernance/dataElementModel'+ ".*"),"get",function() {
    return {
        code:"code_200",
        msg:"查询成功！",
        data:Mock.mock({
            "id":"123456",
            "modelName":"测试数据元模版",
            "level":/gb|shb|db/,
            "modelDesc":"数据元模版的详细描述信息",
            "createTime":Mock.Random.datetime(),
            "modifyTime":Mock.Random.datetime(),
            "dataElements":[{
                "id":"1",
                "dataElementName":"数据元1",
                "dataElementCode":/[a-z][A-Z]{5,8}/,
                "dataFormat":/n3...5|n3.2|str18|boolen|yyyy-MM-dd/,
                "valueDesc":"数据元的值域"
            },{
                "id":"2",
                "dataElementName":"数据元2",
                "dataElementCode":/[a-z][A-Z]{5,8}/,
                "dataFormat":/n3...5|n3.2|str18|boolen|yyyy-MM-dd/,
                "valueDesc":"数据元的值域"
            }]
        })
    };
});