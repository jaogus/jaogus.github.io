// �Ѻ Element Progress Bar
var progressBar = document.getElementById('progressBar');

// ��˹���ǧ���ҷ����ѻവ��� Progress Bar
var interval = setInterval(function() {
    // �Ѻ��һѨ�غѹ�ͧ Progress Bar
    var currentValue = progressBar.value;

    // ������� Progress Bar (������ҧ�������� 1)
    if (currentValue < 100) {
        progressBar.value = currentValue + 1;
    } else {
        // ��ش����ѻവ����� Progress Bar ������ 100%
        clearInterval(interval);
    }
}, 100); // �ѻവ�ء 100 ������Թҷ� (���� 0.1 �Թҷ�)
