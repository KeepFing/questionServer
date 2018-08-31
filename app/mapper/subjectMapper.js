module.exports = {
    queryAll:'SELECT * FROM subject_t',
    queryPoint:'SELECT * FROM point_t WHERE point_parent = ?',
    savePoint:'INSERT INTO point_t VALUES(?,?,?,?)',
    queryQuestion:'SELECT * FROM question_t WHERE question_t.parent_point_id = ? ORDER BY RAND() LIMIT 15',
    saveQuestion:'INSERT INTO question_t VALUES (?,?,?,?,?,?,?)'
}