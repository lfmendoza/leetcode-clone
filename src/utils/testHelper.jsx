// Funciones auxiliares para testing
export const testHelpers = {
  // Crear linked list desde array
  createLinkedList: (arr) => {
    if (!arr || arr.length === 0) return null;

    let head = { val: arr[0], next: null };
    let current = head;

    for (let i = 1; i < arr.length; i++) {
      current.next = { val: arr[i], next: null };
      current = current.next;
    }

    return head;
  },

  // Convertir linked list a array
  linkedListToArray: (head) => {
    const result = [];
    let current = head;
    while (current) {
      result.push(current.val);
      current = current.next;
    }
    return result;
  },

  // Crear árbol binario desde array (nivel por nivel)
  createBinaryTree: (arr) => {
    if (!arr || arr.length === 0) return null;

    const root = { val: arr[0], left: null, right: null };
    const queue = [root];
    let i = 1;

    while (i < arr.length && queue.length > 0) {
      const node = queue.shift();

      if (i < arr.length && arr[i] !== null) {
        node.left = { val: arr[i], left: null, right: null };
        queue.push(node.left);
      }
      i++;

      if (i < arr.length && arr[i] !== null) {
        node.right = { val: arr[i], left: null, right: null };
        queue.push(node.right);
      }
      i++;
    }

    return root;
  },

  // Comparar arrays considerando orden
  arraysEqual: (a, b) => {
    if (!Array.isArray(a) || !Array.isArray(b)) return false;
    if (a.length !== b.length) return false;
    return a.every((val, index) => val === b[index]);
  },

  // Comparar arrays sin considerar orden (para Two Sum)
  arraysEqualUnordered: (a, b) => {
    if (!Array.isArray(a) || !Array.isArray(b)) return false;
    if (a.length !== b.length) return false;

    const sortedA = [...a].sort((x, y) => x - y);
    const sortedB = [...b].sort((x, y) => x - y);

    return sortedA.every((val, index) => val === sortedB[index]);
  },
};

// Soluciones de referencia para validación
export const referenceSolutions = {
  twoSum: (nums, target) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (map.has(complement)) {
        return [map.get(complement), i];
      }
      map.set(nums[i], i);
    }
    return [];
  },

  lengthOfLongestSubstring: (s) => {
    let left = 0,
      maxLength = 0;
    const seen = new Set();

    for (let right = 0; right < s.length; right++) {
      while (seen.has(s[right])) {
        seen.delete(s[left]);
        left++;
      }
      seen.add(s[right]);
      maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
  },

  isValid: (s) => {
    const stack = [];
    const mapping = { ")": "(", "}": "{", "]": "[" };

    for (const char of s) {
      if (char in mapping) {
        if (stack.length === 0 || stack.pop() !== mapping[char]) {
          return false;
        }
      } else {
        stack.push(char);
      }
    }

    return stack.length === 0;
  },
};
