export default function Dictionary () {
	let items = {};

	this.has = function (key) { // 如果某个键值存在于这个字典中，则返回true,否则返回false
		return key in items;
	}
	
	this.set = function (key, value) { // 给字典添加一个新的值，或者用来更新一个已有的值
		items[key] = value;
	}
	
	this.delete = function (key) { // 从字典移除一个值
		if (this.has(key)) {
			delete items[key];
			return true;
		}
		return false;
	}
	
	this.get = function (key) { // 通过键值查找特定的数值并返回
		return this.has(key) ? items[key] : undefined;
	}

	this.values = function () { // 返回一个包含字典中所有数值的数组
		let values = [];
		for (let key in items) {
			if (items.hasOwnProperty(key)) {
				values.push(items[key]);
			}
		}
		return values;
	}
	
	this.clear = function () { // 移除字典中的所有项
		items = {};
	}

	// size 有两种不同的实现方式
	// 第一种使用Object类的keys属性。但是只能在现代浏览器中运行
	//this.size = function () { // 返回集合中包含元素的数量
	//	return Object.keys(items).length;
	//}

	// 第二种方法能在所有浏览器中运行
	this.size = function () { // 返回集合中包含元素的数量
		let count = 0;
		for (let key in items) {
			if (items.hasOwnProperty(key)) {
				++count;
			}
		}
		return count;
	}

	this.keys = function () { // 将字典所包含的所有键名以数组形式返回
		return Object.keys(items);
	}

	this.getItems = function () { // 返回items变量
		return items;
	}
}

var dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');
console.log(dictionary.has('Gandalf'));
console.log(dictionary.size());
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get('Tyrion'));
dictionary.delete('John');
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.getItems());