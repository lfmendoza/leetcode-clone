export const problems = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array",
    tags: ["Array", "Hash Table"],
    likes: 15234,
    dislikes: 892,
    acceptance: 49.7,
    description: `Dado un array de enteros nums y un entero target, devuelve los índices de los dos números que suman el target.

Puedes asumir que cada entrada tendrá exactamente una solución, y no puedes usar el mismo elemento dos veces.

Puedes devolver la respuesta en cualquier orden.`,
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Porque nums[0] + nums[1] == 9, devolvemos [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
        explanation: "nums[1] + nums[2] == 6",
      },
    ],
    constraints: [
      "2 <= nums.length <= 10⁴",
      "-10⁹ <= nums[i] <= 10⁹",
      "-10⁹ <= target <= 10⁹",
      "Solo existe una respuesta válida",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
    // Tu código aquí
    
}`,
      python: `def twoSum(nums, target):
    # Tu código aquí
    pass`,
      java: `public int[] twoSum(int[] nums, int target) {
    // Tu código aquí
    
}`,
      cpp: `vector<int> twoSum(vector<int>& nums, int target) {
    // Tu código aquí
    
}`,
    },
    testCases: [
      {
        input: { nums: [2, 7, 11, 15], target: 9 },
        expected: [0, 1],
      },
      {
        input: { nums: [3, 2, 4], target: 6 },
        expected: [1, 2],
      },
      {
        input: { nums: [3, 3], target: 6 },
        expected: [0, 1],
      },
    ],
    solution: {
      javascript: `function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}`,
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
    },
  },
  {
    id: 2,
    title: "Add Two Numbers",
    difficulty: "Medium",
    category: "Linked List",
    tags: ["Linked List", "Math", "Recursion"],
    likes: 18567,
    dislikes: 3421,
    acceptance: 38.9,
    description: `Se te dan dos listas enlazadas no vacías que representan dos enteros no negativos. Los dígitos se almacenan en orden inverso, y cada uno de sus nodos contiene un solo dígito. Suma los dos números y devuelve la suma como una lista enlazada.

Puedes asumir que los dos números no contienen ningún cero inicial, excepto el número 0 en sí mismo.`,
    examples: [
      {
        input: "l1 = [2,4,3], l2 = [5,6,4]",
        output: "[7,0,8]",
        explanation: "342 + 465 = 807.",
      },
      {
        input: "l1 = [0], l2 = [0]",
        output: "[0]",
        explanation: "0 + 0 = 0",
      },
    ],
    constraints: [
      "El número de nodos en cada lista enlazada está en el rango [1, 100].",
      "0 <= Node.val <= 9",
      "Se garantiza que la lista representa un número que no tiene ceros iniciales.",
    ],
    starterCode: {
      javascript: `function addTwoNumbers(l1, l2) {
    // Tu código aquí
    
}`,
      python: `def addTwoNumbers(l1, l2):
    # Tu código aquí
    pass`,
      java: `public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    // Tu código aquí
    
}`,
      cpp: `ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
    // Tu código aquí
    
}`,
    },
    testCases: [
      {
        input: { l1: [2, 4, 3], l2: [5, 6, 4] },
        expected: [7, 0, 8],
      },
      {
        input: { l1: [0], l2: [0] },
        expected: [0],
      },
      {
        input: { l1: [9, 9, 9, 9, 9, 9, 9], l2: [9, 9, 9, 9] },
        expected: [8, 9, 9, 9, 0, 0, 0, 1],
      },
    ],
    solution: {
      javascript: `function addTwoNumbers(l1, l2) {
    let dummy = { val: 0, next: null };
    let current = dummy;
    let carry = 0;
    
    while (l1 || l2 || carry) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        const sum = val1 + val2 + carry;
        
        carry = Math.floor(sum / 10);
        current.next = { val: sum % 10, next: null };
        current = current.next;
        
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    
    return dummy.next;
}`,
      timeComplexity: "O(max(m, n))",
      spaceComplexity: "O(max(m, n))",
    },
  },
  {
    id: 3,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "String",
    tags: ["Hash Table", "String", "Sliding Window"],
    likes: 28945,
    dislikes: 1234,
    acceptance: 33.8,
    description: `Dada una cadena s, encuentra la longitud de la subcadena más larga sin caracteres repetidos.`,
    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3",
        explanation: 'La respuesta es "abc", con longitud de 3.',
      },
      {
        input: 's = "bbbbb"',
        output: "1",
        explanation: 'La respuesta es "b", con longitud de 1.',
      },
      {
        input: 's = "pwwkew"',
        output: "3",
        explanation: 'La respuesta es "wke", con longitud de 3.',
      },
    ],
    constraints: [
      "0 <= s.length <= 5 * 10⁴",
      "s consiste en letras inglesas, dígitos, símbolos y espacios.",
    ],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {
    // Tu código aquí
    
}`,
      python: `def lengthOfLongestSubstring(s):
    # Tu código aquí
    pass`,
      java: `public int lengthOfLongestSubstring(String s) {
    // Tu código aquí
    
}`,
      cpp: `int lengthOfLongestSubstring(string s) {
    // Tu código aquí
    
}`,
    },
    testCases: [
      {
        input: { s: "abcabcbb" },
        expected: 3,
      },
      {
        input: { s: "bbbbb" },
        expected: 1,
      },
      {
        input: { s: "pwwkew" },
        expected: 3,
      },
      {
        input: { s: "" },
        expected: 0,
      },
    ],
    solution: {
      javascript: `function lengthOfLongestSubstring(s) {
    let left = 0, maxLength = 0;
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
}`,
      timeComplexity: "O(n)",
      spaceComplexity: "O(min(m, n))",
    },
  },
  {
    id: 4,
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stack",
    tags: ["String", "Stack"],
    likes: 14567,
    dislikes: 789,
    acceptance: 40.1,
    description: `Dada una cadena s que contiene solo los caracteres '(', ')', '{', '}', '[' y ']', determina si la cadena de entrada es válida.

Una cadena de entrada es válida si:
1. Los paréntesis abiertos deben cerrarse con el mismo tipo de paréntesis.
2. Los paréntesis abiertos deben cerrarse en el orden correcto.`,
    examples: [
      {
        input: 's = "()"',
        output: "true",
        explanation: "Los paréntesis están balanceados.",
      },
      {
        input: 's = "()[]{}"',
        output: "true",
        explanation: "Todos los tipos de paréntesis están balanceados.",
      },
      {
        input: 's = "(]"',
        output: "false",
        explanation: "Los paréntesis no coinciden.",
      },
    ],
    constraints: [
      "1 <= s.length <= 10⁴",
      "s consiste solo en paréntesis '()[]{}'.",
    ],
    starterCode: {
      javascript: `function isValid(s) {
    // Tu código aquí
    
}`,
      python: `def isValid(s):
    # Tu código aquí
    pass`,
      java: `public boolean isValid(String s) {
    // Tu código aquí
    
}`,
      cpp: `bool isValid(string s) {
    // Tu código aquí
    
}`,
    },
    testCases: [
      {
        input: { s: "()" },
        expected: true,
      },
      {
        input: { s: "()[]{}" },
        expected: true,
      },
      {
        input: { s: "(]" },
        expected: false,
      },
      {
        input: { s: "([)]" },
        expected: false,
      },
      {
        input: { s: "{[]}" },
        expected: true,
      },
    ],
    solution: {
      javascript: `function isValid(s) {
    const stack = [];
    const mapping = { ')': '(', '}': '{', ']': '[' };
    
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
}`,
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
    },
  },
  {
    id: 5,
    title: "Binary Tree Inorder Traversal",
    difficulty: "Easy",
    category: "Tree",
    tags: ["Stack", "Tree", "Depth-First Search", "Binary Tree"],
    likes: 9876,
    dislikes: 432,
    acceptance: 74.5,
    description: `Dada la raíz de un árbol binario, devuelve el recorrido inorder de los valores de sus nodos.`,
    examples: [
      {
        input: "root = [1,null,2,3]",
        output: "[1,3,2]",
        explanation: "Recorrido inorder: izquierda, raíz, derecha",
      },
      {
        input: "root = []",
        output: "[]",
        explanation: "Árbol vacío",
      },
      {
        input: "root = [1]",
        output: "[1]",
        explanation: "Solo un nodo",
      },
    ],
    constraints: [
      "El número de nodos en el árbol está en el rango [0, 100].",
      "-100 <= Node.val <= 100",
    ],
    starterCode: {
      javascript: `function inorderTraversal(root) {
    // Tu código aquí
    
}`,
      python: `def inorderTraversal(root):
    # Tu código aquí
    pass`,
      java: `public List<Integer> inorderTraversal(TreeNode root) {
    // Tu código aquí
    
}`,
      cpp: `vector<int> inorderTraversal(TreeNode* root) {
    // Tu código aquí
    
}`,
    },
    testCases: [
      {
        input: { root: [1, null, 2, 3] },
        expected: [1, 3, 2],
      },
      {
        input: { root: [] },
        expected: [],
      },
      {
        input: { root: [1] },
        expected: [1],
      },
    ],
    solution: {
      javascript: `function inorderTraversal(root) {
    const result = [];
    
    function inorder(node) {
        if (!node) return;
        inorder(node.left);
        result.push(node.val);
        inorder(node.right);
    }
    
    inorder(root);
    return result;
}`,
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
    },
  },
];

export const getProblemsStats = () => {
  const total = problems.length;
  const easy = problems.filter((p) => p.difficulty === "Easy").length;
  const medium = problems.filter((p) => p.difficulty === "Medium").length;
  const hard = problems.filter((p) => p.difficulty === "Hard").length;

  return { total, easy, medium, hard };
};

export const getCategories = () => {
  const categories = [...new Set(problems.map((p) => p.category))];
  return categories.map((category) => ({
    name: category,
    count: problems.filter((p) => p.category === category).length,
  }));
};

export const getProblemById = (id) => {
  return problems.find((p) => p.id === parseInt(id));
};
