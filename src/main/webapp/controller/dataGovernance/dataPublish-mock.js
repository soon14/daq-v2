/**
 * dataPublish 获取
 *分页数据
 */
Mock.mock(wwwroot+'/dataGovernance/dataPublish',function(options) {
    var result = {
        total: 80,
        rows:[]
    };
    var offsetNum = getPostParam(options).offset;
    for(var i = 0 ; i < 20 ; i++){
        result.rows.push(Mock.mock({
            "id":/[a-z][A-Z][0-9]/,
            "taskName":"任务"+(offsetNum+i),
            "modalName": "模型" + (offsetNum+i),
            "modalTable": /[a-z]_[A-Z]{5,8}/,
            "dataSourceName": "数据源" + (offsetNum+i),
            "publishDataTable": /[a-z]_[A-Z]{5,8}/,
            "status":/-1|0|1|2/, //状态：0编辑，-1删除，1启用，2禁用
            "createTime":Mock.Random.datetime(),
            "modifyTime":Mock.Random.datetime()
        }));
    };
    return result;
});

//根据ID获取数据源信息
Mock.mock(RegExp(wwwroot + '/dataGovernance/dataPublish'+ ".*"),"get",function() {
    return {
        code:"code_200",
        msg:"查询成功！",
        data:Mock.mock({
            "id":"12345",
            "dataSourceName":"测试数据源",
            "systemName":"北斗导航系统",
            "dataBaseType":/mysql|oracle|sqlserver|mariadb/,
            "tableSpaceName":"bbdb",
            "dataBaseName":"bbdb",
            "dataBaseIP":Mock.Random.ip(),
            "dataBasePort":10000,
            "userName":10000,
            "dataSourceDesc":"测试数据源，用于进行系统测试，该数据源无数据表",
            "createTime":Mock.Random.datetime(),
            "modifyTime":Mock.Random.datetime()
        })
    };
});

//获取数据源状态字典信息
Mock.mock(wwwroot + '/base/api/dictionary/db_source_status',"get",function() {
    return {
        code:"code_200",
        msg:"查询成功！",
        data:[{
            dicName:"编辑",
            dicCode:"0"
        },{
            dicName:"删除",
            dicCode:"-1"
        },{
            dicName:"启用",
            dicCode:"1"
        },{
            dicName:"禁用",
            dicCode:"2"
        }]
    };
});
//获取数据库类型字典信息
Mock.mock(wwwroot + '/base/api/dictionary/db_types',"get",function() {
    return {
        code:"code_200",
        msg:"查询成功！",
        data:[{
            dicName:"MySQL",
            dicCode:"mysql"
        },{
            dicName:"Oracle",
            dicCode:"oracle"
        },{
            dicName:"SQL Server",
            dicCode:"sqlserver"
        },{
            dicName:"MariaDB",
            dicCode:"mariadb"
        }]
    };
});