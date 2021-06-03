
    var index = -1;
    index++;
    var uid;
    var p = new Array(); //var p = [];
    // p.push(p1);
    // p.push(p2);
    /**显示人员信息**/
    function showPerson() {
      //显示表格
      var table1 = document.getElementById("table1");
      table1.style = "margin: 1.25rem;";
      var str = "</th><th>員編</th><th>預約項目</th><th>預約時間</th><th>姓名</th><th>手機</th><th>性别</th><th>生日</th><th>地址</th>";
      //alert("!!!" + p.length);
        for (var i = 0; i < p.length; i++) {
        var a = p[i];
        str += "<tr><td>" + a.id +"</td><td>" + a.servicename + "</td><th>" +a.servicetime +"</th><th>" +a.name+ "</th><td>" + a.mobile +
          "</td><td>" + a.sex + "</td><td>" + a.birth + "</td><td>" + a.area +
          "</td><td><button type='button' class='btn btn-success' onclick='showUpdatePerson(" + a.id +
          ")'>更新</button> &nbsp;&nbsp;   <button type='button' class='btn btn-danger' onclick='deletePerson(" + a.id +
          ")'>刪除</button>  </td> </tr>";
      }
      table1.innerHTML = str;
    }
    /**显示新增人员信息**/
    function showAddPerson() {
      //隐藏更新人员界面
      var div3 = document.getElementById("div3");
      div3.style = "display: none;";
      var div2 = document.getElementById("div2");
      div2.style = "margin: 2.25rem;";
      document.getElementById("name").value = "";
      document.getElementById("sex").value = "";
      document.getElementById("service-item").value = "";
      document.getElementById("service-time").value = "";
      document.getElementById("mobile").value = "";
      document.getElementById("birth").value = "";
      document.getElementById("area").value = "";
    }
    /**新增人员信息**/
    function addPerson() {
      var field2 = document.getElementById("field2");
      var a = {}; //var a = new Array();
      //alert(index);
      // var a = p[index-1];
      a.id = index + 1;
      a.servicename = document.getElementById("service-item").value;
      a.servicetime = document.getElementById("service-time").value;
      a.name = document.getElementById("name").value;
      a.mobile = document.getElementById("mobile").value;
      a.birth = document.getElementById("birth").value;
      a.sex = document.getElementById("sex").value;
      a.area = document.getElementById("area").value;
      //alert(a.id+" "+a.name+" "+a.birth+" "+a.sex+" "+a.area +" ");
      index++;
      //数组添加表单的值
      p.push(a);
      
      //添加之后重新查询表单
      showPerson();

    }
    /**取消按钮，隐藏表单**/
    function cancel() {
      //隐藏新增人员信息界面
      var div2 = document.getElementById("div2");
      div2.style = "display: none;";
      //隐藏更新人员信息界面
      var div3 = document.getElementById("div3");
      div3.style = "display: none;";
    }
    /**根据id删除人员信息**/
    function deletePerson(id) {
      var flag = confirm("確定刪除？");
      if (flag) {
        for (var i = 0; i < p.length; i++) {
          var a = p[i];
          if (a.id == id) {
            p.splice(i, 1); //从第i个位置开始删除一个元素
          }
        }
      }
      //删除完毕重新加载表单
      showPerson();
    }
    /**根据id修改人员信息**/
    function showUpdatePerson(id) {
      //隐藏添加人员界面
      uid = id;
      var div2 = document.getElementById("div2");
      div2.style = "display: none;";
      //显示更新人员界面
      var div3 = document.getElementById("div3");
      div3.style = "margin: 2.25rem";
      //根据id遍历数组得到要修改的值,然后用document对象进行修改
      for (var i = 0; i < p.length; i++) {
        var a = p[i];
        if (a.id == id) {
          
          document.getElementById("uname").value = a.name;
          document.getElementById("umobile").value = a.mobile;
          document.getElementById("uservice-item").value = a.servicename;
          document.getElementById("uservice-time").value = a.servicetime;
          document.getElementById("ubirth").value = a.birth;
          document.getElementById("usex").value = a.sex;
          document.getElementById("uarea").value = a.area;
          //document.getElementById("uid").value = a.id;
        }
      }
    }

    function updatePerson() {
      var id = uid;
      //再根据id把表单中的value值存入对于的p[]i数组中
      alert("id = " + uid);
      for (var i = 0; i < p.length; i++) {
        var a = p[i];
        if (a.id == uid) {
          p[i].name = document.getElementById("uname").value;
          p[i].mobile = document.getElementById("umobile").value;
          p[i].birth = document.getElementById("ubirth").value;
          p[i].sex = document.getElementById("usex").value;
          p[i].area = document.getElementById("uarea").value;
          p[i].servicename = document.getElementById("uservice-item").value;
          p[i].servicetime = document.getElementById("uservice-time").value;
        }
      }
      //重新调用表单刷新
      showPerson();
      //隐藏添加人员界面
      var div3 = document.getElementById("div3");
      div3.style = "display: none;";
    }
